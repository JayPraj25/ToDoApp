# To-Do List App

## Overview

This is a full-stack to-do list application built with React (front-end) and Node.js (back-end). Users can add, edit, delete, and mark tasks as completed. The tasks are stored in a MongoDB database, and the app is deployed publicly.

## Front-End (React)

The front-end is built using ReactJS, providing a clean and intuitive interface for task management.

### Features:
- Add tasks
- View tasks
- Edit tasks
- Delete tasks
- Mark tasks as complete

### Tools:
- ReactJS
- Axios (for API requests)
- CSS (for basic styling)

## Back-End (Node.js)

The back-end is powered by Node.js and ExpressJS, with MongoDB for data persistence. The API handles all CRUD operations for task management.

### Endpoints:
- `GET /tasks` - Retrieve all tasks
- `POST /tasks` - Add a new task
- `PUT /tasks/:id` - Update a task
- `DELETE /tasks/:id` - Delete a task

### Tools:
- Node.js
- ExpressJS
- MongoDB

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/your-repo-url/todo-app.git
