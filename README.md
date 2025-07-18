# MERN Inventory Suite

A full-stack Product Management application built with the MERN (MongoDB, Express, React, Node.js) stack. This project provides a robust, scalable foundation for managing products, featuring a modern frontend and a RESTful backend API.

## Features
- Product listing and creation
- RESTful API with Express & MongoDB
- Modern React frontend (Vite)
- Modular, maintainable code structure
- Streamlined local development

## Technology Stack
- **Frontend:** React, Vite, JavaScript
- **Backend:** Node.js, Express
- **Database:** MongoDB

## Getting Started

### Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn
- MongoDB instance (local or cloud)

### Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install backend dependencies:
   ```bash
   npm install
   ```
3. **Configure Environment Variables:**
   - Create a `.env` file in the `backend` directory with the following content:
     ```env
     MONGO_URI=your_mongodb_connection_string
     PORT=5000                # Optional, defaults to 5000
     NODE_ENV=development     # Optional, can be 'development' or 'production'
     ```
   - Replace `your_mongodb_connection_string` with your actual MongoDB URI.
4. Start the backend server:
   ```bash
   node server.js
   ```
   The backend will run on [http://localhost:5000](http://localhost:5000) by default.

### Frontend Setup
1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install frontend dependencies:
   ```bash
   npm install
   ```
3. Start the frontend development server:
   ```bash
   npm run dev
   ```
   The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

## Usage
- Access the frontend in your browser at [http://localhost:5173](http://localhost:5173)
- Use the user interface to view and create products
- The frontend communicates with the backend API for all product operations

## Environment Variables

The backend requires a `.env` file in the `backend` directory. Below is an example configuration:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000                # Optional, defaults to 5000
NODE_ENV=development     # Optional, can be 'development' or 'production'
```

- **MONGO_URI**: (Required) The connection string for your MongoDB instance.
- **PORT**: (Optional) The port for the backend server. Defaults to 5000 if not specified.
- **NODE_ENV**: (Optional) Set to `development` or `production` as needed.

**Note:** The `.env` file is excluded from version control. Each user must create their own `.env` file as described above.

## Project Structure
```
mern-inventory-app/
  backend/
    config/           # Database configuration
    controllers/      # Express route controllers
    models/           # Mongoose models
    routes/           # API routes
    server.js         # Backend entry point
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
Contributions are welcome. Please open issues or submit pull requests for enhancements and bug fixes. For major changes, please discuss them via an issue first to ensure alignment.

## License
This project is licensed under the MIT License.