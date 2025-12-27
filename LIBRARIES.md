# Essential Libraries for Resume Builder

## Backend (Python) - requirements.txt

```
Flask==3.0.0              # Web framework for building the API
Flask-SQLAlchemy==3.1.1   # ORM for database operations
Flask-CORS==4.0.0         # Enable Cross-Origin Resource Sharing
Flask-Bcrypt==1.0.1       # Password hashing and security
reportlab==4.0.7          # PDF generation library
python-dotenv==1.0.0      # Environment variable management
```

### What Each Library Does:

1. **Flask** - Core web framework
   - Handles HTTP requests/responses
   - Routing and API endpoints
   - Session management

2. **Flask-SQLAlchemy** - Database ORM
   - Manages User and Resume models
   - Handles database queries
   - Automatic table creation

3. **Flask-CORS** - Cross-Origin Support
   - Allows frontend (different port) to communicate with backend
   - Handles preflight requests
   - Manages credentials

4. **Flask-Bcrypt** - Password Security
   - Hashes passwords before storing
   - Verifies passwords during login
   - Industry-standard encryption

5. **ReportLab** - PDF Generation
   - Creates ATS-optimized PDF resumes
   - Professional formatting
   - Custom styling support

6. **python-dotenv** - Configuration
   - Loads environment variables
   - Manages secrets securely
   - Different configs for dev/prod

## Frontend (JavaScript) - No Installation Needed!

The frontend uses **vanilla JavaScript** with no external libraries:

- **HTML5** - Structure
- **CSS3** - Styling (custom design system)
- **JavaScript ES6** - Logic and interactivity
- **Google Fonts** - Typography (loaded via CDN)

### Browser APIs Used:
- `fetch()` - API calls to backend
- `localStorage` - Could be used for caching (optional)
- `Blob` - PDF download handling
- `FormData` - Form handling

## Installation Commands

### Quick Setup:

```bash
# Navigate to backend
cd backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# Windows:
venv\Scripts\activate
# macOS/Linux:
source venv/bin/activate

# Install all dependencies
pip install -r requirements.txt

# Run the server
python app.py
```

### Frontend Setup:
No installation needed! Just serve the files:

```bash
# Option 1: Python HTTP server
cd frontend
python -m http.server 5500

# Option 2: VS Code Live Server
# Right-click index.html → Open with Live Server

# Option 3: Node.js http-server
npx http-server -p 5500
```

## Minimal Installation (If you want to reduce dependencies)

If you want the absolute minimum:

```
Flask>=3.0.0
Flask-SQLAlchemy>=3.0.0
Flask-CORS>=4.0.0
werkzeug>=3.0.0
reportlab>=4.0.0
```

This will auto-install necessary sub-dependencies like:
- Werkzeug (Flask's WSGI utility)
- Jinja2 (templating, though we don't use it much)
- Click (CLI support)
- ItsDangerous (session security)
- SQLAlchemy (database toolkit)

## Verification

After installation, verify with:

```bash
pip list
```

You should see all the packages listed above plus their dependencies.

## Common Issues

**Issue**: `pip install` fails
**Solution**: Upgrade pip first: `python -m pip install --upgrade pip`

**Issue**: ReportLab installation fails on Windows
**Solution**: Install Visual C++ Build Tools or use pre-built wheels

**Issue**: Flask-Bcrypt fails
**Solution**: May need C++ compiler. Alternative: use `bcrypt` directly
