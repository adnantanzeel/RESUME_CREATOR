from flask import Blueprint, request, jsonify, session
from models import db, Resume, User
from datetime import datetime

resume_bp = Blueprint('resume', __name__)

def require_auth(f):
    """Decorator to require authentication"""
    def decorated_function(*args, **kwargs):
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'error': 'Authentication required'}), 401
        return f(user_id, *args, **kwargs)
    decorated_function.__name__ = f.__name__
    return decorated_function

@resume_bp.route('/api/resumes', methods=['GET'])
@require_auth
def get_resumes(user_id):
    """Get all resumes for the current user"""
    try:
        resumes = Resume.query.filter_by(user_id=user_id).order_by(Resume.updated_at.desc()).all()
        return jsonify({
            'resumes': [resume.to_dict() for resume in resumes]
        }), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@resume_bp.route('/api/resumes', methods=['POST'])
@require_auth
def create_resume(user_id):
    """Create a new resume"""
    try:
        data = request.get_json()
        
        title = data.get('title', 'My Resume')
        resume_data = data.get('resume_data', {})
        
        # Create new resume
        new_resume = Resume(
            user_id=user_id,
            title=title
        )
        new_resume.set_resume_data(resume_data)
        
        db.session.add(new_resume)
        db.session.commit()
        
        return jsonify({
            'message': 'Resume created successfully',
            'resume': new_resume.to_dict()
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@resume_bp.route('/api/resumes/<int:resume_id>', methods=['GET'])
@require_auth
def get_resume(user_id, resume_id):
    """Get a specific resume"""
    try:
        resume = Resume.query.filter_by(id=resume_id, user_id=user_id).first()
        
        if not resume:
            return jsonify({'error': 'Resume not found'}), 404
        
        return jsonify({'resume': resume.to_dict()}), 200
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@resume_bp.route('/api/resumes/<int:resume_id>', methods=['PUT'])
@require_auth
def update_resume(user_id, resume_id):
    """Update a resume"""
    try:
        resume = Resume.query.filter_by(id=resume_id, user_id=user_id).first()
        
        if not resume:
            return jsonify({'error': 'Resume not found'}), 404
        
        data = request.get_json()
        
        if 'title' in data:
            resume.title = data['title']
        
        if 'resume_data' in data:
            resume.set_resume_data(data['resume_data'])
        
        resume.updated_at = datetime.utcnow()
        db.session.commit()
        
        return jsonify({
            'message': 'Resume updated successfully',
            'resume': resume.to_dict()
        }), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@resume_bp.route('/api/resumes/<int:resume_id>', methods=['DELETE'])
@require_auth
def delete_resume(user_id, resume_id):
    """Delete a resume"""
    try:
        resume = Resume.query.filter_by(id=resume_id, user_id=user_id).first()
        
        if not resume:
            return jsonify({'error': 'Resume not found'}), 404
        
        db.session.delete(resume)
        db.session.commit()
        
        return jsonify({'message': 'Resume deleted successfully'}), 200
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500
