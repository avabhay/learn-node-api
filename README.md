# Learn Node - User Management API

This project is a simple Node.js REST API for managing users, built with Express and MongoDB (via Mongoose).

## Features

- Create a new user
- Get all users
- Get a user by ID
- Update a user by ID
- Delete a user by ID

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Start MongoDB on your local machine.
4. Run `npm start` to start the server.

The server will run at `http://127.0.0.1:8000/`.

## API Endpoints

All endpoints are prefixed with `/api/users`.

### 1. Get All Users

- **GET** `/api/users`
- **Response:** Array of user objects.

### 2. Create a New User

- **POST** `/api/users`
- **Body Parameters:**
  - `first_name` (string, required)
  - `last_name` (string, required)
  - `email` (string, required)
  - `gender` (string, required)
  - `job_title` (string, required)
- **Response:** Status message.

### 3. Get User by ID

- **GET** `/api/users/:id`
- **Response:** User object.

### 4. Update User by ID

- **PUT** `/api/users/:id`
- **Body Parameters:** Any of the user fields to update.
- **Response:** Status message.

### 5. Delete User by ID

- **DELETE** `/api/users/:id`
- **Response:** Status message.

## Project Structure

- `index.js` - Entry point, sets up Express server and routes.
- `config/database.js` - MongoDB connection logic.
- `models/user.js` - Mongoose user schema and model.
- `controllers/user.js` - Route handler functions.
- `routes/user.js` - Express routes for user APIs.

## Example User Object

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "john.doe@example.com",
  "gender": "Male",
  "job_title": "Software Engineer"
}