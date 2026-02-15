# Robert's Portfolio

A modern, interactive portfolio website for showcasing software development projects with an integrated management system.

🌐 **[View Live Demo](https://robertgpatch.github.io/Robert-portfolio/)**

## Overview

This portfolio website is built with React and Vite, featuring a clean, modern design with smooth animations and responsive layouts. It includes a complete project management system that allows you to add, edit, and showcase your projects dynamically.

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with Vite
- 🧭 Client-side routing with React Router
- 📝 Built-in project management system
- 🔒 Password-protected admin interface
- 💾 Local storage persistence
- 🎯 Featured project highlighting
- 💫 Smooth animations and transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/RobertgPatch/Robert-portfolio.git
cd Robert-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navigation.jsx   # Main navigation bar
│   ├── ProjectCard.jsx  # Project showcase cards
│   └── ProtectedRoute.jsx  # Route guard for admin access
├── context/            # React Context providers
│   ├── ProjectsContext.jsx  # Project state management
│   └── AuthContext.jsx  # Authentication state management
├── data/               # Data files
│   └── projects.json   # Default projects data
├── pages/              # Page components
│   ├── Home.jsx        # Landing page with project showcase
│   ├── ProjectDetail.jsx  # Individual project details
│   ├── Admin.jsx       # Project management interface
│   └── Login.jsx       # Admin login page
├── App.jsx             # Main app component with routing
├── index.css           # Global styles
└── main.jsx           # App entry point
```

## Using the Portfolio

### Home Page
The home page displays your featured projects (or all projects if none are featured). Visitors can click on any project card to view detailed information.

### Project Details
Each project has a dedicated detail page showing:
- Full project description and overview
- Key features list
- Technologies used
- Challenges and solutions
- Links to live demo and GitHub repository (if provided)

### Managing Projects
Access the project management interface by clicking "Manage Projects" in the navigation. The admin interface is password-protected to prevent unauthorized access.

#### Authentication
- **Default Password**: `admin123`
- **Login**: Navigate to `/admin` or click "Manage Projects" to be prompted for the password
- **Logout**: Click the "Logout" button in the admin interface to end your session
- **Session Persistence**: Your login is saved in the browser until you logout

**Security Note**: This is a client-side authentication system suitable for personal portfolios. The password is checked client-side and stored in the source code. For production applications with sensitive data, implement proper server-side authentication.

#### Admin Features
1. **Add New Project**: Click "+ Add New Project" and fill in the form with:
   - Title and description
   - Icon (emoji)
   - Tags for categorization
   - Status (in-progress, completed, archived)
   - Live URL and GitHub URL
   - Detailed project information
   - Featured status

2. **Edit Project**: Click the pencil icon (✏️) on any project to modify its details

3. **Delete Project**: Click the trash icon (🗑️) to remove a project (with confirmation)

### Data Persistence
All project data is stored in the browser's localStorage, so your changes persist across sessions. The initial data comes from `src/data/projects.json`.

## Customization

### Changing the Admin Password
To change the admin password, edit the `ADMIN_PASSWORD` constant in `src/context/AuthContext.jsx`:

```javascript
// Admin password - in production, this should be an environment variable
const ADMIN_PASSWORD = 'your-secure-password'
```

For better security, consider using environment variables:
1. Create a `.env` file in the root directory
2. Add `VITE_ADMIN_PASSWORD=your-password`
3. Update AuthContext.jsx to use `import.meta.env.VITE_ADMIN_PASSWORD`

### Adding Initial Projects
Edit `src/data/projects.json` to change the default projects that appear on first load.

### Styling
The app uses CSS custom properties for theming. Main theme colors are defined in `src/App.css`:
- `--primary`: Primary accent color
- `--secondary`: Secondary accent color
- `--background`: Main background color
- `--card-bg`: Card background color
- `--text`: Primary text color

### Project Schema
Each project follows this structure:
```json
{
  "id": "project-id",
  "title": "Project Title",
  "description": "Brief description",
  "icon": "📦",
  "tags": ["Tag1", "Tag2"],
  "liveUrl": "https://example.com",
  "githubUrl": "https://github.com/...",
  "status": "completed",
  "featured": true,
  "details": {
    "overview": "Detailed overview",
    "keyFeatures": ["Feature 1", "Feature 2"],
    "technologies": ["React", "Node.js"],
    "challenges": "Technical challenges and solutions"
  }
}
```

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties and animations
- **LocalStorage** - Client-side data persistence

## Deployment

This project is automatically deployed to GitHub Pages when changes are pushed to the `main` branch.

**Live URL:** https://robertgpatch.github.io/Robert-portfolio/

### Manual Deployment

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service (Netlify, Vercel, GitHub Pages, etc.).

### GitHub Pages Setup

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys to GitHub Pages on every push to main. To enable:

1. Go to repository Settings → Pages
2. Set Source to "GitHub Actions"
3. The workflow will automatically deploy on the next push

## Example Projects Included

The portfolio comes with two example projects:
1. **Email Relay System** - A high-performance email relay system
2. **Private LLM File Search** - An AI-powered file search interface

You can edit or remove these through the Admin interface and add your own projects.

## License

This project is open source and available for use.

## Contact

Robert - Software Engineer | Full-Stack Developer
