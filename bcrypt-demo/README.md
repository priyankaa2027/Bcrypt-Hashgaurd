
# Secure Auth System (Node.js, Express, MongoDB, JWT)

A full-stack authentication system using Node.js, Express, MongoDB (Mongoose), bcrypt, JWT, and best security practices.

## Features
- User registration & login with password hashing (bcrypt)
- MongoDB database for persistent user storage
- Robust username & password validation
- JWT-based session management
- Rate limiting for login attempts
- Environment variables for secrets & DB credentials
- Protected dashboard page (JWT required)
- Logout functionality
- Secure routes with authentication middleware
- HTTPS-ready for production
- Unit tests for core features

## Project Structure
```
bcrypt-demo/
├── server.js
├── .env.example
├── models/
│   └── User.js
├── routes/
│   └── auth.js
├── middleware/
│   └── auth.js
├── public/
│   ├── register.html
│   ├── login.html
│   ├── dashboard.html
│   └── style.css
└── tests/
    └── auth.test.js
```

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or cloud)

### Installation
1. Clone the repository:
   ```powershell
   git clone <repo-url>
   cd bcrypt-demo
   ```
2. Install dependencies:
   ```powershell
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your MongoDB URI and JWT secret.

### Running the Server
```powershell
node server.js
```
Server runs at [http://localhost:3000](http://localhost:3000).

## Usage

### Registration
- Go to `/register.html` and create a new account.
- Password must be at least 8 characters, include uppercase, lowercase, number, and special character.

### Login
- Go to `/login.html` and log in.
- On success, you are redirected to `/dashboard.html`.

### Dashboard
- Accessible only with a valid JWT token.
- Shows a welcome message and logout button.

### API Endpoints
- `POST /api/auth/register` — Register a new user. `{ username, password }`
- `POST /api/auth/login` — Login and receive JWT. `{ username, password }`
- `POST /api/auth/logout` — Logout (client deletes token)
- `GET /api/dashboard` — Protected route, requires JWT

## Environment Variables
See `.env.example` for required variables:
- `MONGO_URI` — MongoDB connection string
- `JWT_SECRET` — Secret for signing JWT tokens
- `PORT` — Server port

## Security Best Practices

## Testing
  ```powershell
  npm test
  ```

## Deployment

## License
ISC

Feel free to modify and extend for learning or production use!

