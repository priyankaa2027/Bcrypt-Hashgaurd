# Bcrypt Demo

A simple Node.js application demonstrating user registration and login with password hashing using bcrypt. This project uses Express for the backend and vanilla HTML/JS for the frontend.

## Features
- User registration with password hashing (bcryptjs)
- User login with password verification
- In-memory user storage (no database)
- Simple frontend forms for registration and login
- CORS enabled for API routes

## Project Structure
```
bcrypt-demo/
├── package.json
├── server.js
└── public/
    ├── index.html
    ├── login.html
    ├── register.html
    └── script.js
```

## Getting Started

### Prerequisites
- Node.js (v14+ recommended)

### Installation
1. Clone the repository or download the source code.
2. Navigate to the project folder:
   ```powershell
   cd bcrypt-demo
   ```
3. Install dependencies:
   ```powershell
   npm install
   ```

### Running the Server
Start the server with:
```powershell
node server.js
```
The server will run at [http://localhost:3000](http://localhost:3000).

## Usage

### Registration
- Go to `/register.html` in your browser.
- Enter a username and password, then submit the form.
- The password is hashed and stored in memory.

### Login
- Go to `/login.html` in your browser.
- Enter your username and password, then submit the form.
- The server verifies the password using bcrypt.

### API Endpoints
- `POST /api/register` — Register a new user. Expects `{ username, password }` in JSON body.
- `POST /api/login` — Login with credentials. Expects `{ username, password }` in JSON body.
- `GET /debug/users` — Returns all registered users (for debugging; shows hashed passwords).

## Frontend Files
- `index.html`: Main landing page with styled forms.
- `register.html`: Registration form and logic.
- `login.html`: Login form and logic.
- `script.js`: Handles form submissions (if used in `index.html`).

## Backend (`server.js`)
- Uses Express for routing and middleware.
- Uses bcryptjs for password hashing and comparison.
- Stores users in an in-memory array (not persistent).

## Dependencies
- express
- bcryptjs
- body-parser
- cors

## Security Notes
- This demo uses in-memory storage and is **not** suitable for production.
- For real applications, use a database and implement proper authentication and validation.

## License
ISC

---
Feel free to modify and extend this project for learning or prototyping purposes.
