# 🚀 Resume Builder - Full Stack Application

A modern, ATS-optimized resume builder with a vibrant futuristic design. Create professional resumes with live preview and download as PDF.

![Tech Stack](https://img.shields.io/badge/Frontend-HTML%20%7C%20CSS%20%7C%20JavaScript-blue)
![Backend](https://img.shields.io/badge/Backend-Python%20%7C%20Flask-green)
![Database](https://img.shields.io/badge/Database-SQLite-orange)

## ✨ Features

- 🔐 **User Authentication** - Secure signup, login, and logout
- 📝 **Resume Builder** - Comprehensive form with all essential sections
- 👁️ **Live Preview** - Real-time preview as you type
- 📄 **ATS Optimized** - Clean, parseable format for Applicant Tracking Systems
- 💾 **Auto-Save** - Save and edit your resumes anytime
- 📥 **PDF Download** - Export professional PDF resumes
- 🎨 **Futuristic Design** - Vibrant neon gradients and glassmorphism
- 📱 **Responsive** - Works on desktop, tablet, and mobile

## 🛠️ Tech Stack

### Backend
- **Python 3.8+**
- **Flask** - Web framework
- **SQLAlchemy** - ORM for database operations
- **Flask-Bcrypt** - Password hashing
- **ReportLab** - PDF generation
- **SQLite** - Database

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with custom design system
- **Vanilla JavaScript** - Interactivity
- **Google Fonts (Inter)** - Typography

## 📁 Project Structure

```
RESUME_BUILDER/
├── backend/
│   ├── app.py              # Flask application
│   ├── config.py           # Configuration
│   ├── models.py           # Database models
│   ├── auth.py             # Authentication routes
│   ├── resume.py           # Resume CRUD routes
│   ├── pdf_generator.py    # PDF generation
│   ├── requirements.txt    # Python dependencies
│   └── database.db         # SQLite database (auto-created)
├── frontend/
│   ├── index.html          # Login page
│   ├── signup.html         # Signup page
│   ├── dashboard.html      # Resume builder
│   ├── css/
│   │   └── style.css       # Futuristic styling
│   └── js/
│       ├── auth.js         # Authentication logic
│       ├── resume.js       # Resume form handling
│       ├── preview.js      # Live preview
│       └── pdf.js          # PDF download
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)
- A modern web browser
- A local web server (e.g., Live Server for VS Code, or Python's http.server)

### Backend Setup

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Create a virtual environment (recommended):**
   ```bash
   python -m venv venv
   ```

3. **Activate the virtual environment:**
   - Windows:
     ```bash
     venv\Scripts\activate
     ```
   - macOS/Linux:
     ```bash
     source venv/bin/activate
     ```

4. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the Flask server:**
   ```bash
   python app.py
   ```

   The backend will start on `http://localhost:5000`

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```bash
   cd frontend
   ```

2. **Serve the frontend files:**

   **Option 1: Using Python's built-in server**
   ```bash
   python -m http.server 5500
   ```

   **Option 2: Using VS Code Live Server**
   - Install the "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

   **Option 3: Using Node.js http-server**
   ```bash
   npx http-server -p 5500
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5500` (or the port shown by your server)

## 📖 Usage Guide

### 1. Create an Account
- Open the application in your browser
- Click "Sign Up" on the login page
- Fill in your username, email, and password
- Click "Create Account"

### 2. Build Your Resume
- After logging in, you'll see the resume builder dashboard
- Fill in your personal information
- Add work experience, education, skills, projects, and certifications
- Use the "+" buttons to add multiple entries
- Watch the live preview update in real-time

### 3. Save Your Resume
- Click the "💾 Save Resume" button
- Your resume will be saved to the database
- You can edit it anytime by logging back in

### 4. Download as PDF
- After saving, click "📥 Download PDF"
- Your ATS-optimized resume will download as a PDF file

## 🎨 Design Features

- **Neon Color Palette**: Cyan (#00f0ff), Purple (#b537ff), Pink (#ff006e)
- **Dark Mode**: Deep backgrounds (#0a0a0f, #1a1a2e)
- **Glassmorphism**: Frosted glass effect on cards
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Inter font family

## 🔒 Security Features

- Password hashing with Bcrypt
- Session-based authentication
- CORS protection
- HTTP-only cookies
- Input validation

## 📡 API Endpoints

### Authentication
- `POST /api/signup` - Create new user account
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/user` - Get current user info

### Resume Management
- `GET /api/resumes` - Get all user's resumes
- `POST /api/resumes` - Create new resume
- `GET /api/resumes/<id>` - Get specific resume
- `PUT /api/resumes/<id>` - Update resume
- `DELETE /api/resumes/<id>` - Delete resume
- `GET /api/resumes/<id>/download` - Download resume as PDF

## 🔧 Configuration

### Backend Configuration (config.py)
- `SECRET_KEY`: Session secret key (change in production)
- `SQLALCHEMY_DATABASE_URI`: Database connection string
- `SESSION_COOKIE_HTTPONLY`: Cookie security settings

### Frontend Configuration (auth.js)
- `API_URL`: Backend API URL (default: `http://localhost:5000`)

## 🚀 Future Enhancements

- [ ] Multiple resume templates
- [ ] Resume sharing via unique links
- [ ] Import from LinkedIn
- [ ] Export to Word format
- [ ] AI-powered content suggestions
- [ ] Resume analytics and ATS score
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Email resume functionality
- [ ] Resume version history

## 🐛 Troubleshooting

### Backend Issues

**Problem**: `ModuleNotFoundError` when running Flask
- **Solution**: Make sure you've activated the virtual environment and installed all dependencies

**Problem**: Database errors
- **Solution**: Delete `database.db` and restart the Flask server to recreate the database

### Frontend Issues

**Problem**: CORS errors in browser console
- **Solution**: Make sure the backend is running and CORS is properly configured

**Problem**: "Network error" when logging in
- **Solution**: Verify the backend is running on port 5000 and the `API_URL` in `auth.js` is correct

**Problem**: Forms not submitting
- **Solution**: Check browser console for JavaScript errors and ensure all required fields are filled

## 📝 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Development

### Running in Development Mode

1. Start the backend with debug mode (already enabled in `app.py`)
2. Use a live reload server for the frontend
3. Open browser DevTools for debugging

### Database Management

The SQLite database (`database.db`) is created automatically when you first run the Flask app. To reset the database:

```bash
# Stop the Flask server
# Delete the database file
rm database.db  # or del database.db on Windows
# Restart the Flask server
python app.py
```

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📧 Support

For issues or questions, please check the troubleshooting section or create an issue in the repository.

---

**Made with ❤️ using Flask and Vanilla JavaScript**

🌟 **Star this project if you find it useful!**
