from flask import Blueprint, send_file, session, jsonify
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT, TA_CENTER
from models import Resume
import io

pdf_bp = Blueprint('pdf', __name__)

def require_auth(f):
    """Decorator to require authentication"""
    def decorated_function(*args, **kwargs):
        user_id = session.get('user_id')
        if not user_id:
            return jsonify({'error': 'Authentication required'}), 401
        return f(user_id, *args, **kwargs)
    decorated_function.__name__ = f.__name__
    return decorated_function

def generate_pdf(resume_data):
    """Generate ATS-optimized PDF from resume data"""
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter, 
                           topMargin=0.5*inch, bottomMargin=0.5*inch,
                           leftMargin=0.75*inch, rightMargin=0.75*inch)
    
    # Container for PDF elements
    elements = []
    
    # Define styles
    styles = getSampleStyleSheet()
    
    # Custom styles for ATS optimization
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=18,
        textColor=colors.HexColor('#1a1a1a'),
        spaceAfter=6,
        alignment=TA_CENTER,
        fontName='Helvetica-Bold'
    )
    
    heading_style = ParagraphStyle(
        'CustomHeading',
        parent=styles['Heading2'],
        fontSize=12,
        textColor=colors.HexColor('#2c3e50'),
        spaceAfter=6,
        spaceBefore=12,
        fontName='Helvetica-Bold',
        borderWidth=1,
        borderColor=colors.HexColor('#3498db'),
        borderPadding=3,
        leftIndent=0
    )
    
    normal_style = ParagraphStyle(
        'CustomNormal',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#333333'),
        spaceAfter=4,
        fontName='Helvetica'
    )
    
    bold_style = ParagraphStyle(
        'CustomBold',
        parent=styles['Normal'],
        fontSize=10,
        textColor=colors.HexColor('#1a1a1a'),
        fontName='Helvetica-Bold'
    )
    
    # Personal Information
    personal = resume_data.get('personal', {})
    if personal.get('name'):
        elements.append(Paragraph(personal['name'], title_style))
    
    # Contact info
    contact_parts = []
    if personal.get('email'):
        contact_parts.append(personal['email'])
    if personal.get('phone'):
        contact_parts.append(personal['phone'])
    if personal.get('location'):
        contact_parts.append(personal['location'])
    
    if contact_parts:
        contact_text = ' | '.join(contact_parts)
        elements.append(Paragraph(contact_text, normal_style))
    
    # Links
    link_parts = []
    if personal.get('linkedin'):
        link_parts.append(f"LinkedIn: {personal['linkedin']}")
    if personal.get('portfolio'):
        link_parts.append(f"Portfolio: {personal['portfolio']}")
    
    if link_parts:
        links_text = ' | '.join(link_parts)
        elements.append(Paragraph(links_text, normal_style))
    
    elements.append(Spacer(1, 0.2*inch))
    
    # Professional Summary
    if resume_data.get('summary'):
        elements.append(Paragraph('PROFESSIONAL SUMMARY', heading_style))
        elements.append(Paragraph(resume_data['summary'], normal_style))
        elements.append(Spacer(1, 0.1*inch))
    
    # Work Experience
    experience = resume_data.get('experience', [])
    if experience:
        elements.append(Paragraph('WORK EXPERIENCE', heading_style))
        for exp in experience:
            # Job title and company
            job_line = f"<b>{exp.get('title', '')}</b> - {exp.get('company', '')}"
            elements.append(Paragraph(job_line, bold_style))
            
            # Duration and location
            duration_parts = []
            if exp.get('start_date'):
                duration_parts.append(exp['start_date'])
            if exp.get('end_date'):
                duration_parts.append(exp['end_date'])
            
            duration_text = ' to '.join(duration_parts) if duration_parts else ''
            if exp.get('location'):
                duration_text += f" | {exp['location']}"
            
            if duration_text:
                elements.append(Paragraph(duration_text, normal_style))
            
            # Description
            if exp.get('description'):
                # Split by newlines and create bullet points
                desc_lines = exp['description'].split('\n')
                for line in desc_lines:
                    if line.strip():
                        elements.append(Paragraph(f"• {line.strip()}", normal_style))
            
            elements.append(Spacer(1, 0.1*inch))
    
    # Education
    education = resume_data.get('education', [])
    if education:
        elements.append(Paragraph('EDUCATION', heading_style))
        for edu in education:
            # Degree and institution
            edu_line = f"<b>{edu.get('degree', '')}</b> - {edu.get('institution', '')}"
            elements.append(Paragraph(edu_line, bold_style))
            
            # Duration and location
            duration_parts = []
            if edu.get('start_date'):
                duration_parts.append(edu['start_date'])
            if edu.get('end_date'):
                duration_parts.append(edu['end_date'])
            
            duration_text = ' to '.join(duration_parts) if duration_parts else ''
            if edu.get('location'):
                duration_text += f" | {edu['location']}"
            
            if duration_text:
                elements.append(Paragraph(duration_text, normal_style))
            
            if edu.get('gpa'):
                elements.append(Paragraph(f"GPA: {edu['gpa']}", normal_style))
            
            elements.append(Spacer(1, 0.1*inch))
    
    # Skills
    skills = resume_data.get('skills', {})
    if skills:
        elements.append(Paragraph('SKILLS', heading_style))
        
        if skills.get('technical'):
            elements.append(Paragraph('<b>Technical Skills:</b> ' + ', '.join(skills['technical']), normal_style))
        
        if skills.get('soft'):
            elements.append(Paragraph('<b>Soft Skills:</b> ' + ', '.join(skills['soft']), normal_style))
        
        elements.append(Spacer(1, 0.1*inch))
    
    # Projects
    projects = resume_data.get('projects', [])
    if projects:
        elements.append(Paragraph('PROJECTS', heading_style))
        for proj in projects:
            proj_line = f"<b>{proj.get('name', '')}</b>"
            if proj.get('link'):
                proj_line += f" | {proj['link']}"
            elements.append(Paragraph(proj_line, bold_style))
            
            if proj.get('description'):
                elements.append(Paragraph(proj['description'], normal_style))
            
            if proj.get('technologies'):
                elements.append(Paragraph(f"Technologies: {', '.join(proj['technologies'])}", normal_style))
            
            elements.append(Spacer(1, 0.1*inch))
    
    # Certifications
    certifications = resume_data.get('certifications', [])
    if certifications:
        elements.append(Paragraph('CERTIFICATIONS', heading_style))
        for cert in certifications:
            cert_line = f"<b>{cert.get('name', '')}</b>"
            if cert.get('issuer'):
                cert_line += f" - {cert['issuer']}"
            if cert.get('date'):
                cert_line += f" ({cert['date']})"
            elements.append(Paragraph(cert_line, normal_style))
        
        elements.append(Spacer(1, 0.1*inch))
    
    # Build PDF
    doc.build(elements)
    buffer.seek(0)
    return buffer

@pdf_bp.route('/api/resumes/<int:resume_id>/download', methods=['GET'])
@require_auth
def download_resume(user_id, resume_id):
    """Generate and download resume as PDF"""
    try:
        resume = Resume.query.filter_by(id=resume_id, user_id=user_id).first()
        
        if not resume:
            return jsonify({'error': 'Resume not found'}), 404
        
        resume_data = resume.get_resume_data()
        pdf_buffer = generate_pdf(resume_data)
        
        # Generate filename
        filename = f"{resume.title.replace(' ', '_')}.pdf"
        
        return send_file(
            pdf_buffer,
            mimetype='application/pdf',
            as_attachment=True,
            download_name=filename
        )
        
    except Exception as e:
        return jsonify({'error': str(e)}), 500
