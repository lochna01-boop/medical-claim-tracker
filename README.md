# Medical Insurance Claim Tracking Application

A comprehensive web application for managing medical insurance claims with a modern, professional interface.

## Features

- **Dashboard**: Overview with statistics and recent claims
- **Submit Claim**: Comprehensive form for new claim submissions
- **Claims Tracking**: Advanced filtering and search capabilities
- **Process Flow**: Visual workflow representation

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 16 or higher)
- [VS Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) (optional)

## Setup Instructions for VS Code

### Step 1: Create Project Directory
1. Open VS Code
2. Open Terminal (`Ctrl+`` or `View > Terminal`)
3. Navigate to your desired location:
   ```bash
   cd Desktop  # or wherever you want to create the project
   mkdir medical-claim-tracker
   cd medical-claim-tracker
   ```

### Step 2: Initialize the Project
```bash
# Create a new Vite React TypeScript project
npm create vite@latest . -- --template react-ts

# Install dependencies
npm install

# Install additional required packages
npm install lucide-react

# Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 3: Configure Tailwind CSS
Replace the content of `tailwind.config.js` with:
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Step 4: Copy Project Files
1. Replace the contents of each file with the code provided
2. Create the following directory structure:
   ```
   src/
   ├── components/
   │   ├── Dashboard.tsx
   │   ├── ClaimForm.tsx
   │   ├── ClaimsTracking.tsx
   │   ├── ProcessFlow.tsx
   │   └── Navbar.tsx
   ├── data/
   │   └── mockData.ts
   ├── types/
   │   └── index.ts
   ├── App.tsx
   ├── main.tsx
   └── index.css
   ```

### Step 5: Update package.json
Ensure your `package.json` includes these dependencies:
```json
{
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "vite": "^5.4.2"
  }
}
```

## Running the Application

### Development Mode
```bash
npm run dev
```
This will start the development server, typically at `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## VS Code Extensions (Recommended)

Install these extensions for better development experience:
- **ES7+ React/Redux/React-Native snippets**
- **Tailwind CSS IntelliSense**
- **TypeScript Importer**
- **Auto Rename Tag**
- **Bracket Pair Colorizer**
- **Prettier - Code formatter**

## Project Structure

```
medical-claim-tracker/
├── public/
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.tsx    # Main dashboard with statistics
│   │   ├── ClaimForm.tsx    # Claim submission form
│   │   ├── ClaimsTracking.tsx # Claims management and filtering
│   │   ├── ProcessFlow.tsx  # Workflow visualization
│   │   └── Navbar.tsx       # Navigation component
│   ├── data/
│   │   └── mockData.ts      # Sample data for development
│   ├── types/
│   │   └── index.ts         # TypeScript type definitions
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles with Tailwind
├── index.html               # HTML template
├── package.json             # Project dependencies
├── tailwind.config.js       # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## Key Features

### Dashboard
- Real-time statistics display
- Recent claims overview
- Status indicators with color coding

### Claim Submission
- Multi-step form with validation
- Dynamic document management
- Employee and relation selection

### Claims Tracking
- Advanced search and filtering
- Export functionality
- Status-based organization

### Process Flow
- Visual workflow representation
- Step-by-step progress tracking
- Status legend and explanations

## Troubleshooting

### Common Issues

1. **Port already in use**: Change port in `vite.config.ts`
2. **Module not found**: Run `npm install` to ensure all dependencies are installed
3. **TypeScript errors**: Check that all files are properly typed

### Getting Help

If you encounter issues:
1. Check the browser console for errors
2. Verify all files are saved
3. Restart the development server
4. Clear browser cache

## Next Steps

- Add backend API integration
- Implement user authentication
- Add database connectivity
- Deploy to production environment#   m e d i c a l c l a i m - t r a c k e r  
 