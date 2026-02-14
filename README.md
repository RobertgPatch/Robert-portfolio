# Robert's Portfolio

A modern, interactive portfolio showcasing demo versions of recent software development projects.

## Overview

This portfolio website is built with React and Vite, featuring a clean, modern design with smooth animations and responsive layouts. It showcases two major projects with interactive demos:

1. **Email Relay System** - A high-performance email relay system with queue management and real-time tracking
2. **Private LLM File Search** - An AI-powered file search interface using natural language processing

## Features

- 🎨 Modern, dark-themed UI with gradient accents
- 📱 Fully responsive design for all devices
- ⚡ Fast performance with Vite
- 🧭 Client-side routing with React Router
- 🎯 Interactive project demos
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
│   └── ProjectCard.jsx  # Project showcase cards
├── pages/              # Page components
│   ├── Home.jsx        # Landing page
│   ├── EmailRelay.jsx  # Email relay system demo
│   └── LLMFileSearch.jsx # LLM file search demo
├── App.jsx             # Main app component with routing
├── index.css           # Global styles
└── main.jsx           # App entry point
```

## Technologies Used

- **React 19** - UI framework
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with custom properties and animations

## Projects Showcase

### Email Relay System
A robust email relay system featuring:
- Email composition and sending
- Real-time delivery queue
- Status tracking (Queued → Sent)
- Interactive demo with live updates

### Private LLM File Search
An intelligent file search interface with:
- Natural language query processing
- Semantic search capabilities
- Relevance scoring
- Sample document database

## Deployment

To build for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory, ready to be deployed to any static hosting service.

## License

This project is open source and available for use.

## Contact

Robert - Software Engineer | Full-Stack Developer
