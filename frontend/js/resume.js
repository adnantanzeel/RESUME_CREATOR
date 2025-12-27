// Resume form handling and dynamic field management

// Add Experience Entry
function addExperience() {
    const container = document.getElementById('experienceContainer');
    const currentCount = container.children.length + 1;
    const uniqueId = Date.now(); // Use timestamp for unique IDs

    const entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.id = `experience-${uniqueId}`;
    entry.dataset.type = 'experience';
    entry.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4 style="color: var(--neon-cyan); margin: 0;" class="entry-number">Experience #${currentCount}</h4>
            <button type="button" onclick="removeEntry('experience-${uniqueId}')" class="btn btn-danger btn-small">Remove</button>
        </div>
        
        <div class="form-group">
            <label>Job Title</label>
            <input type="text" class="exp-title" placeholder="Software Engineer" onchange="updatePreview()">
        </div>
        
        <div class="form-group">
            <label>Company</label>
            <input type="text" class="exp-company" placeholder="Tech Company Inc." onchange="updatePreview()">
        </div>
        
        <div class="grid grid-2">
            <div class="form-group">
                <label>Start Date</label>
                <input type="text" class="exp-start" placeholder="Jan 2020" onchange="updatePreview()">
            </div>
            
            <div class="form-group">
                <label>End Date</label>
                <input type="text" class="exp-end" placeholder="Present" onchange="updatePreview()">
            </div>
        </div>
        
        <div class="form-group">
            <label>Location</label>
            <input type="text" class="exp-location" placeholder="San Francisco, CA" onchange="updatePreview()">
        </div>
        
        <div class="form-group">
            <label>Description</label>
            <textarea class="exp-description" rows="4" placeholder="• Led development of key features&#10;• Improved performance by 40%&#10;• Mentored junior developers" onchange="updatePreview()"></textarea>
            <small style="color: var(--text-muted);">Use bullet points (•) for better formatting</small>
        </div>
    `;

    container.appendChild(entry);
    updatePreview();
}

// Add Education Entry
function addEducation() {
    const container = document.getElementById('educationContainer');
    const currentCount = container.children.length + 1;
    const uniqueId = Date.now();

    const entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.id = `education-${uniqueId}`;
    entry.dataset.type = 'education';
    entry.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4 style="color: var(--neon-cyan); margin: 0;" class="entry-number">Education #${currentCount}</h4>
            <button type="button" onclick="removeEntry('education-${uniqueId}')" class="btn btn-danger btn-small">Remove</button>
        </div>
        
        <div class="form-group">
            <label>Degree</label>
            <input type="text" class="edu-degree" placeholder="Bachelor of Science in Computer Science" onchange="updatePreview()">
        </div>
        
        <div class="form-group">
            <label>Institution</label>
            <input type="text" class="edu-institution" placeholder="University Name" onchange="updatePreview()">
        </div>
        
        <div class="grid grid-2">
            <div class="form-group">
                <label>Start Date</label>
                <input type="text" class="edu-start" placeholder="2016" onchange="updatePreview()">
            </div>
            
            <div class="form-group">
                <label>End Date</label>
                <input type="text" class="edu-end" placeholder="2020" onchange="updatePreview()">
            </div>
        </div>
        
        <div class="grid grid-2">
            <div class="form-group">
                <label>Location</label>
                <input type="text" class="edu-location" placeholder="City, State" onchange="updatePreview()">
            </div>
            
            <div class="form-group">
                <label>GPA (Optional)</label>
                <input type="text" class="edu-gpa" placeholder="3.8/4.0" onchange="updatePreview()">
            </div>
        </div>
    `;

    container.appendChild(entry);
    updatePreview();
}

// Add Project Entry
function addProject() {
    const container = document.getElementById('projectsContainer');
    const currentCount = container.children.length + 1;
    const uniqueId = Date.now();

    const entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.id = `project-${uniqueId}`;
    entry.dataset.type = 'project';
    entry.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4 style="color: var(--neon-cyan); margin: 0;" class="entry-number">Project #${currentCount}</h4>
            <button type="button" onclick="removeEntry('project-${uniqueId}')" class="btn btn-danger btn-small">Remove</button>
        </div>
        
        <div class="form-group">
            <label>Project Name</label>
            <input type="text" class="proj-name" placeholder="E-commerce Platform" onchange="updatePreview()">
        </div>
        
        <div class="form-group">
            <label>Link (Optional)</label>
            <input type="url" class="proj-link" placeholder="https://github.com/username/project" onchange="updatePreview()">
        </div>
        
        <div class="form-group">
            <label>Description</label>
            <textarea class="proj-description" rows="3" placeholder="Brief description of the project and your role..." onchange="updatePreview()"></textarea>
        </div>
        
        <div class="form-group">
            <label>Technologies</label>
            <input type="text" class="proj-tech" placeholder="React, Node.js, MongoDB (comma-separated)" onchange="updatePreview()">
        </div>
    `;

    container.appendChild(entry);
    updatePreview();
}

// Add Certification Entry
function addCertification() {
    const container = document.getElementById('certificationsContainer');
    const currentCount = container.children.length + 1;
    const uniqueId = Date.now();

    const entry = document.createElement('div');
    entry.className = 'entry-item';
    entry.id = `certification-${uniqueId}`;
    entry.dataset.type = 'certification';
    entry.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
            <h4 style="color: var(--neon-cyan); margin: 0;" class="entry-number">Certification #${currentCount}</h4>
            <button type="button" onclick="removeEntry('certification-${uniqueId}')" class="btn btn-danger btn-small">Remove</button>
        </div>
        
        <div class="form-group">
            <label>Certification Name</label>
            <input type="text" class="cert-name" placeholder="AWS Certified Solutions Architect" onchange="updatePreview()">
        </div>
        
        <div class="grid grid-2">
            <div class="form-group">
                <label>Issuer</label>
                <input type="text" class="cert-issuer" placeholder="Amazon Web Services" onchange="updatePreview()">
            </div>
            
            <div class="form-group">
                <label>Date</label>
                <input type="text" class="cert-date" placeholder="2023" onchange="updatePreview()">
            </div>
        </div>
    `;

    container.appendChild(entry);
    updatePreview();
}

// Renumber entries in a container
function renumberEntries(containerId, prefix) {
    const container = document.getElementById(containerId);
    const entries = container.querySelectorAll('.entry-item');
    entries.forEach((entry, index) => {
        const numberElement = entry.querySelector('.entry-number');
        if (numberElement) {
            numberElement.textContent = `${prefix} #${index + 1}`;
        }
    });
}

// Remove Entry
function removeEntry(entryId) {
    const entry = document.getElementById(entryId);
    if (entry) {
        const type = entry.dataset.type;
        entry.remove();

        // Renumber remaining entries
        if (type === 'experience') {
            renumberEntries('experienceContainer', 'Experience');
        } else if (type === 'education') {
            renumberEntries('educationContainer', 'Education');
        } else if (type === 'project') {
            renumberEntries('projectsContainer', 'Project');
        } else if (type === 'certification') {
            renumberEntries('certificationsContainer', 'Certification');
        }

        updatePreview();
    }
}

// Collect Resume Data
function collectResumeData() {
    const data = {
        personal: {
            name: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            location: document.getElementById('location').value,
            linkedin: document.getElementById('linkedin').value,
            portfolio: document.getElementById('portfolio').value
        },
        summary: document.getElementById('summary').value,
        experience: [],
        education: [],
        skills: {
            technical: document.getElementById('technicalSkills').value.split(',').map(s => s.trim()).filter(s => s),
            soft: document.getElementById('softSkills').value.split(',').map(s => s.trim()).filter(s => s)
        },
        projects: [],
        certifications: []
    };

    // Collect experience
    document.querySelectorAll('[id^="experience-"]').forEach(entry => {
        data.experience.push({
            title: entry.querySelector('.exp-title').value,
            company: entry.querySelector('.exp-company').value,
            start_date: entry.querySelector('.exp-start').value,
            end_date: entry.querySelector('.exp-end').value,
            location: entry.querySelector('.exp-location').value,
            description: entry.querySelector('.exp-description').value
        });
    });

    // Collect education
    document.querySelectorAll('[id^="education-"]').forEach(entry => {
        data.education.push({
            degree: entry.querySelector('.edu-degree').value,
            institution: entry.querySelector('.edu-institution').value,
            start_date: entry.querySelector('.edu-start').value,
            end_date: entry.querySelector('.edu-end').value,
            location: entry.querySelector('.edu-location').value,
            gpa: entry.querySelector('.edu-gpa').value
        });
    });

    // Collect projects
    document.querySelectorAll('[id^="project-"]').forEach(entry => {
        data.projects.push({
            name: entry.querySelector('.proj-name').value,
            link: entry.querySelector('.proj-link').value,
            description: entry.querySelector('.proj-description').value,
            technologies: entry.querySelector('.proj-tech').value.split(',').map(s => s.trim()).filter(s => s)
        });
    });

    // Collect certifications
    document.querySelectorAll('[id^="certification-"]').forEach(entry => {
        data.certifications.push({
            name: entry.querySelector('.cert-name').value,
            issuer: entry.querySelector('.cert-issuer').value,
            date: entry.querySelector('.cert-date').value
        });
    });

    return data;
}

// Form Validation
function validateForm() {
    let isValid = true;
    const errors = [];

    // Clear previous validation errors
    document.querySelectorAll('.form-group').forEach(group => {
        group.classList.remove('error', 'valid');
    });
    document.querySelectorAll('.error-message').forEach(msg => msg.remove());

    // Validate Full Name
    const fullName = document.getElementById('fullName');
    if (!fullName.value.trim()) {
        showFieldError(fullName, 'Full name is required');
        isValid = false;
        errors.push('Full name is required');
    } else {
        fullName.parentElement.classList.add('valid');
    }

    // Validate Email
    const email = document.getElementById('email');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim()) {
        showFieldError(email, 'Email is required');
        isValid = false;
        errors.push('Email is required');
    } else if (!emailRegex.test(email.value)) {
        showFieldError(email, 'Please enter a valid email address');
        isValid = false;
        errors.push('Invalid email format');
    } else {
        email.parentElement.classList.add('valid');
    }

    // Validate Phone
    const phone = document.getElementById('phone');
    if (!phone.value.trim()) {
        showFieldError(phone, 'Phone number is required');
        isValid = false;
        errors.push('Phone number is required');
    } else {
        phone.parentElement.classList.add('valid');
    }

    // Show summary error if validation fails
    if (!isValid) {
        showAlert('Please fill in all required fields correctly: ' + errors.join(', '), 'error');
        // Scroll to first error
        const firstError = document.querySelector('.form-group.error');
        if (firstError) {
            firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }

    return isValid;
}

// Show field-specific error
function showFieldError(inputElement, message) {
    const formGroup = inputElement.parentElement;
    formGroup.classList.add('error');

    const errorMsg = document.createElement('small');
    errorMsg.className = 'error-message';
    errorMsg.textContent = message;
    errorMsg.style.color = 'var(--neon-pink)';
    errorMsg.style.display = 'block';
    errorMsg.style.marginTop = '5px';
    formGroup.appendChild(errorMsg);
}

// Save Resume
async function saveResume() {
    // Validate form before saving
    if (!validateForm()) {
        return;
    }

    const resumeData = collectResumeData();

    try {
        let response;
        if (currentResumeId) {
            // Update existing resume
            response = await fetch(`${API_URL}/api/resumes/${currentResumeId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    title: resumeData.personal.name ? `${resumeData.personal.name}'s Resume` : 'My Resume',
                    resume_data: resumeData
                })
            });
        } else {
            // Create new resume
            response = await fetch(`${API_URL}/api/resumes`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify({
                    title: resumeData.personal.name ? `${resumeData.personal.name}'s Resume` : 'My Resume',
                    resume_data: resumeData
                })
            });
        }

        const data = await response.json();

        if (response.ok) {
            currentResumeId = data.resume.id;
            showAlert('Resume saved successfully!', 'success');
        } else {
            showAlert(data.error || 'Failed to save resume', 'error');
        }
    } catch (error) {
        console.error('Save error:', error);
        showAlert('Network error. Please check if the backend is running.', 'error');
    }
}

// Load Latest Resume
async function loadLatestResume() {
    try {
        const response = await fetch(`${API_URL}/api/resumes`, {
            credentials: 'include'
        });

        if (response.ok) {
            const data = await response.json();
            if (data.resumes && data.resumes.length > 0) {
                const latestResume = data.resumes[0];
                currentResumeId = latestResume.id;
                loadResumeData(latestResume.resume_data);
            }
        }
    } catch (error) {
        console.error('Load error:', error);
    }
}

// Load Resume Data into Form
function loadResumeData(data) {
    // Load personal info
    if (data.personal) {
        document.getElementById('fullName').value = data.personal.name || '';
        document.getElementById('email').value = data.personal.email || '';
        document.getElementById('phone').value = data.personal.phone || '';
        document.getElementById('location').value = data.personal.location || '';
        document.getElementById('linkedin').value = data.personal.linkedin || '';
        document.getElementById('portfolio').value = data.personal.portfolio || '';
    }

    // Load summary
    document.getElementById('summary').value = data.summary || '';

    // Load skills
    if (data.skills) {
        document.getElementById('technicalSkills').value = (data.skills.technical || []).join(', ');
        document.getElementById('softSkills').value = (data.skills.soft || []).join(', ');
    }

    // Clear and load experience
    document.getElementById('experienceContainer').innerHTML = '';
    if (data.experience && data.experience.length > 0) {
        data.experience.forEach(exp => {
            addExperience();
            const container = document.getElementById('experienceContainer');
            const entries = container.querySelectorAll('.entry-item');
            const entry = entries[entries.length - 1];
            entry.querySelector('.exp-title').value = exp.title || '';
            entry.querySelector('.exp-company').value = exp.company || '';
            entry.querySelector('.exp-start').value = exp.start_date || '';
            entry.querySelector('.exp-end').value = exp.end_date || '';
            entry.querySelector('.exp-location').value = exp.location || '';
            entry.querySelector('.exp-description').value = exp.description || '';
        });
    }

    // Clear and load education
    document.getElementById('educationContainer').innerHTML = '';
    if (data.education && data.education.length > 0) {
        data.education.forEach(edu => {
            addEducation();
            const container = document.getElementById('educationContainer');
            const entries = container.querySelectorAll('.entry-item');
            const entry = entries[entries.length - 1];
            entry.querySelector('.edu-degree').value = edu.degree || '';
            entry.querySelector('.edu-institution').value = edu.institution || '';
            entry.querySelector('.edu-start').value = edu.start_date || '';
            entry.querySelector('.edu-end').value = edu.end_date || '';
            entry.querySelector('.edu-location').value = edu.location || '';
            entry.querySelector('.edu-gpa').value = edu.gpa || '';
        });
    }

    // Clear and load projects
    document.getElementById('projectsContainer').innerHTML = '';
    if (data.projects && data.projects.length > 0) {
        data.projects.forEach(proj => {
            addProject();
            const container = document.getElementById('projectsContainer');
            const entries = container.querySelectorAll('.entry-item');
            const entry = entries[entries.length - 1];
            entry.querySelector('.proj-name').value = proj.name || '';
            entry.querySelector('.proj-link').value = proj.link || '';
            entry.querySelector('.proj-description').value = proj.description || '';
            entry.querySelector('.proj-tech').value = (proj.technologies || []).join(', ');
        });
    }

    // Clear and load certifications
    document.getElementById('certificationsContainer').innerHTML = '';
    if (data.certifications && data.certifications.length > 0) {
        data.certifications.forEach(cert => {
            addCertification();
            const container = document.getElementById('certificationsContainer');
            const entries = container.querySelectorAll('.entry-item');
            const entry = entries[entries.length - 1];
            entry.querySelector('.cert-name').value = cert.name || '';
            entry.querySelector('.cert-issuer').value = cert.issuer || '';
            entry.querySelector('.cert-date').value = cert.date || '';
        });
    }

    updatePreview();
}

// Clear Form
function clearForm() {
    if (confirm('Are you sure you want to clear the form? This will not delete saved resumes.')) {
        document.getElementById('resumeForm').reset();
        document.getElementById('experienceContainer').innerHTML = '';
        document.getElementById('educationContainer').innerHTML = '';
        document.getElementById('projectsContainer').innerHTML = '';
        document.getElementById('certificationsContainer').innerHTML = '';
        currentResumeId = null;

        // Clear validation states
        document.querySelectorAll('.form-group').forEach(group => {
            group.classList.remove('error', 'valid');
        });
        document.querySelectorAll('.error-message').forEach(msg => msg.remove());

        addExperience();
        addEducation();
        updatePreview();
    }
}

// Add event listeners for real-time preview
document.addEventListener('DOMContentLoaded', () => {
    const inputs = ['fullName', 'email', 'phone', 'location', 'linkedin', 'portfolio', 'summary', 'technicalSkills', 'softSkills'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', updatePreview);
        }
    });
});
