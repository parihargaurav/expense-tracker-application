# Expense Tracker App

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
  
## Description

The Expense Tracker App is a web application built using the MERN stack (MongoDB, Express.js, React, and Node.js). It provides users with the ability to track their expenses and manage their financial activities.

## Features

- User authentication (signup, login, logout)
- Add, edit, and delete expenses
- View expense history
- Filter expenses by date or category
- Monthly and yearly expense summaries
- Responsive design for a seamless user experience on various devices

## Technologies

- **Frontend:**
  - React.js
  - React Router for navigation
  - State management with Redux
  - Axios for API requests
  - Responsive design with CSS Media Queries

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB for data storage
  - Mongoose as the ODM (Object Data Modeling)

- **Authentication:**
  - JSON Web Tokens (JWT) for secure user authentication

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/expense-tracker.git
   cd expense-tracker
   ```

2. Install dependencies:

   ```bash
   # Install server dependencies
   cd server
   npm install

   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up MongoDB:

   - Create a MongoDB Atlas account (https://www.mongodb.com/cloud/atlas)
   - Create a cluster and obtain the connection string
   - Replace the connection string in `server/config/config.js` with your own

4. Run the application:

   ```bash
   # Run the backend
   cd backend
   npm start

   # Run the frontend
   cd ../frontend
   npm start
   ```

## Usage

1. Open the application in your browser: http://localhost:3000
2. Sign up or log in to your account.
