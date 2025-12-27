from flask import Flask, jsonify
from flask_cors import CORS
from config import Config
from models import db
from auth import auth_bp, bcrypt
from resume import resume_bp
from pdf_generator import pdf_bp
import os

def create_app():
    """Application factory"""
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    bcrypt.init_app(app)
    
    # Enable CORS for frontend
    CORS(app, supports_credentials=True, origins=['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5500', 'http://127.0.0.1:5500', 'http://localhost:8000', 'http://127.0.0.1:8000'])
    
    # Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(resume_bp)
    app.register_blueprint(pdf_bp)
    
    # Create database tables
    with app.app_context():
        db.create_all()
    
    # Health check endpoint
    @app.route('/api/health', methods=['GET'])
    def health_check():
        return jsonify({'status': 'healthy', 'message': 'Resume Builder API is running'}), 200
    
    return app

if __name__ == '__main__':
    app = create_app()
    print("🚀 Resume Builder API is running on http://localhost:5000")
    print("📝 API Endpoints:")
    print("   - POST /api/signup")
    print("   - POST /api/login")
    print("   - POST /api/logout")
    print("   - GET  /api/user")
    print("   - GET  /api/resumes")
    print("   - POST /api/resumes")
    print("   - GET  /api/resumes/<id>")
    print("   - PUT  /api/resumes/<id>")
    print("   - DELETE /api/resumes/<id>")
    print("   - GET  /api/resumes/<id>/download")
    app.run(debug=True, port=5000)
