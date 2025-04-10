# PERN Notes App

A simple note-taking application built with the PERN stack (PostgreSQL, Express, React, Node.js).

## Overview

This application allows users to create, read, update, and delete notes. It features a React frontend for the user interface and a PostgreSQL database for data storage with Express/Node.js handling the backend API.

## Features

- Create new notes
- View all notes
- Edit existing notes
- Delete notes
- User-friendly interface

## Tech Stack

- **PostgreSQL**: Database for storing notes
- **Express.js**: Backend framework for handling API requests
- **React**: Frontend library for building the user interface
- **Node.js**: JavaScript runtime for the backend server

## Getting Started

### Prerequisites

- Node.js (v12+)
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/Juan-Ceballos/pern-notes-app.git
   cd pern-notes-app
   ```

2. Install backend dependencies:
   ```
   cd server
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a database for the application
   - Update the connection details in `server/db.js`

4. Install frontend dependencies:
   ```
   cd ../client
   npm install
   ```

### Running the Application

1. Start the backend server:
   ```
   cd server
   npm start
   ```

2. In a separate terminal, start the frontend:
   ```
   cd client
   npm start
   ```

3. Access the application at: `http://localhost:3000`

## Project Structure

- `/client`: React frontend application
- `/server`: Node.js/Express backend server
  - `/routes`: API route definitions
  - `db.js`: Database connection and query functions

## API Endpoints

- `GET /notes`: Fetch all notes
- `POST /notes`: Create a new note
- `PUT /notes/:id`: Update a specific note
- `DELETE /notes/:id`: Delete a specific note

## License

This project is open source and available under the [MIT License](LICENSE).

## Created By

Juan Ceballos - [GitHub Profile](https://github.com/Juan-Ceballos)
