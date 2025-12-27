// Live preview rendering

function updatePreview() {
    const data = collectResumeData();
    const preview = document.getElementById('resumePreview');

    let html = '';

    // Personal Information
    if (data.personal.name) {
        html += `<h1 style="text-align: center;">${data.personal.name}</h1>`;
    }

    // Contact Info
    const contactParts = [];
    if (data.personal.email) contactParts.push(data.personal.email);
    if (data.personal.phone) contactParts.push(data.personal.phone);
    if (data.personal.location) contactParts.push(data.personal.location);

    if (contactParts.length > 0) {
        html += `<p style="text-align: center; margin-bottom: 5px;">${contactParts.join(' | ')}</p>`;
    }

    // Links
    const linkParts = [];
    if (data.personal.linkedin) linkParts.push(`LinkedIn: ${data.personal.linkedin}`);
    if (data.personal.portfolio) linkParts.push(`Portfolio: ${data.personal.portfolio}`);

    if (linkParts.length > 0) {
        html += `<p style="text-align: center; margin-bottom: 20px; font-size: 0.9em;">${linkParts.join(' | ')}</p>`;
    }

    // Professional Summary
    if (data.summary) {
        html += `<h2>PROFESSIONAL SUMMARY</h2>`;
        html += `<p>${data.summary}</p>`;
    }

    // Work Experience
    if (data.experience.length > 0 && data.experience.some(exp => exp.title || exp.company)) {
        html += `<h2>WORK EXPERIENCE</h2>`;
        data.experience.forEach(exp => {
            if (exp.title || exp.company) {
                html += `<div style="margin-bottom: 15px;">`;

                if (exp.title && exp.company) {
                    html += `<h3>${exp.title} - ${exp.company}</h3>`;
                } else if (exp.title) {
                    html += `<h3>${exp.title}</h3>`;
                } else if (exp.company) {
                    html += `<h3>${exp.company}</h3>`;
                }

                const durationParts = [];
                if (exp.start_date) durationParts.push(exp.start_date);
                if (exp.end_date) durationParts.push(exp.end_date);

                let duration = durationParts.join(' to ');
                if (exp.location) {
                    duration += duration ? ` | ${exp.location}` : exp.location;
                }

                if (duration) {
                    html += `<p style="margin: 3px 0; font-style: italic; color: #666;">${duration}</p>`;
                }

                if (exp.description) {
                    const lines = exp.description.split('\n').filter(line => line.trim());
                    if (lines.length > 0) {
                        html += `<ul style="margin-top: 8px;">`;
                        lines.forEach(line => {
                            const cleanLine = line.trim().replace(/^[•\-\*]\s*/, '');
                            if (cleanLine) {
                                html += `<li>${cleanLine}</li>`;
                            }
                        });
                        html += `</ul>`;
                    }
                }

                html += `</div>`;
            }
        });
    }

    // Education
    if (data.education.length > 0 && data.education.some(edu => edu.degree || edu.institution)) {
        html += `<h2>EDUCATION</h2>`;
        data.education.forEach(edu => {
            if (edu.degree || edu.institution) {
                html += `<div style="margin-bottom: 15px;">`;

                if (edu.degree && edu.institution) {
                    html += `<h3>${edu.degree} - ${edu.institution}</h3>`;
                } else if (edu.degree) {
                    html += `<h3>${edu.degree}</h3>`;
                } else if (edu.institution) {
                    html += `<h3>${edu.institution}</h3>`;
                }

                const durationParts = [];
                if (edu.start_date) durationParts.push(edu.start_date);
                if (edu.end_date) durationParts.push(edu.end_date);

                let duration = durationParts.join(' to ');
                if (edu.location) {
                    duration += duration ? ` | ${edu.location}` : edu.location;
                }

                if (duration) {
                    html += `<p style="margin: 3px 0; font-style: italic; color: #666;">${duration}</p>`;
                }

                if (edu.gpa) {
                    html += `<p style="margin: 3px 0;">GPA: ${edu.gpa}</p>`;
                }

                html += `</div>`;
            }
        });
    }

    // Skills
    if (data.skills.technical.length > 0 || data.skills.soft.length > 0) {
        html += `<h2>SKILLS</h2>`;

        if (data.skills.technical.length > 0) {
            html += `<p><strong>Technical Skills:</strong> ${data.skills.technical.join(', ')}</p>`;
        }

        if (data.skills.soft.length > 0) {
            html += `<p><strong>Soft Skills:</strong> ${data.skills.soft.join(', ')}</p>`;
        }
    }

    // Projects
    if (data.projects.length > 0 && data.projects.some(proj => proj.name)) {
        html += `<h2>PROJECTS</h2>`;
        data.projects.forEach(proj => {
            if (proj.name) {
                html += `<div style="margin-bottom: 15px;">`;

                let projectHeader = `<h3>${proj.name}`;
                if (proj.link) {
                    projectHeader += ` | ${proj.link}`;
                }
                projectHeader += `</h3>`;
                html += projectHeader;

                if (proj.description) {
                    html += `<p>${proj.description}</p>`;
                }

                if (proj.technologies.length > 0) {
                    html += `<p style="font-style: italic; color: #666;">Technologies: ${proj.technologies.join(', ')}</p>`;
                }

                html += `</div>`;
            }
        });
    }

    // Certifications
    if (data.certifications.length > 0 && data.certifications.some(cert => cert.name)) {
        html += `<h2>CERTIFICATIONS</h2>`;
        html += `<ul>`;
        data.certifications.forEach(cert => {
            if (cert.name) {
                let certText = cert.name;
                if (cert.issuer) certText += ` - ${cert.issuer}`;
                if (cert.date) certText += ` (${cert.date})`;
                html += `<li>${certText}</li>`;
            }
        });
        html += `</ul>`;
    }

    // If no content, show placeholder
    if (!html) {
        html = '<p style="text-align: center; color: #999;">Start filling the form to see your resume preview...</p>';
    }

    preview.innerHTML = html;
}
