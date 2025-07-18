# MERN Inventory Suite

A full-stack Product Management application built with the MERN (MongoDB, Express, React, Node.js) stack. This project provides a robust foundation for managing products, featuring a modern frontend and a scalable backend API.

## Features
- Product listing and creation
- RESTful API with Express & MongoDB
- Modern React frontend (Vite)
- Modular code structure
- Easy local development

## Tech Stack
- **Frontend:** React, Vite, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure MongoDB connection in `backend/config/db.js` if needed.
4. Start the backend server:
   ```bash
   node server.js
   ```
   The backend runs on [http://localhost:5000](http://localhost:5000) by default.

### Frontend Setup
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend runs on [http://localhost:5173](http://localhost:5173) by default.

## Usage
- Access the frontend in your browser at [http://localhost:5173](http://localhost:5173)
- Use the UI to view and create products
- The frontend communicates with the backend API for all product operations

## Folder Structure
```
mern/
  backend/
    config/           # Database configuration
    controllers/      # Express route controllers
    models/           # Mongoose models
    routes/           # API routes
    server.js         # Entry point for backend
  frontend/
    src/
      components/     # React components
      pages/          # Page components
      store/          # State management
      ...
    public/           # Static assets
    main.jsx          # Frontend entry point
```

## Contributing
Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

## License
This project is licensed under the MIT License.