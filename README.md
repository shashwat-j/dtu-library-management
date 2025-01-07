# DTU Library Management System

## Deployed Link
https://dtu-library-management.vercel.app/
(may take upto 50 seconds to start up the app)

## Demo Video
[Watch the demo video here](https://www.loom.com/share/446de12143074ee887ac6149e89131b0?sid=fbc69f31-cc85-49dc-95e7-c8b1cfff21b4)

---

## Technologies Used
- **Frontend**: React, HTML, CSS, JavaScript, Tailwind CSS, DaisyUI
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: Firebase Auth

---

## Admin Login Credentials
- **Email**: `admin@gmail.com`
- **Password**: `123456`

---

## Setup Instructions

### Frontend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory with Firebase credentials:
   ```
   VITE_API_URL=http://localhost:5000/api
   VITE_FIREBASE_API_KEY=<Your Firebase API Key>
   VITE_FIREBASE_AUTH_DOMAIN=<Your Firebase Auth Domain>
   VITE_FIREBASE_PROJECT_ID=<Your Firebase Project ID>
   VITE_FIREBASE_STORAGE_BUCKET=<Your Firebase Storage Bucket>
   VITE_FIREBASE_MESSAGING_SENDER_ID=<Your Firebase Messaging Sender ID>
   VITE_FIREBASE_APP_ID=<Your Firebase App ID>
   VITE_FIREBASE_MEASUREMENT_ID=<Your Firebase Measurement ID>
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file in the root directory with the MongoDB connection string:
   ```
   MONGODB_URI=<Your MongoDB Connection String>
   ```
3. Start the backend server:
   ```bash
   node --env-file=.env index.js
   ```

---

## Features
- User authentication with Firebase.
- UI using Tailwind CSS and DaisyUI with Dark Mode.
- Admin portal.
- MongoDB as the database for secure and scalable data storage.
- Dashboard with Library statistics.
- Deployed on Render
