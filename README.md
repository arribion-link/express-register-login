## 🛡️ User Authentication API

This project provides a simple user authentication system built with **Node.js**, **Express**, **MongoDB**, **bcrypt**, and **JWT**. It supports user registration and login with secure password hashing and token-based authentication.

---

### 📦 Features

- ✅ User Registration with hashed passwords  
- ✅ User Login with password verification  
- ✅ JWT token generation for session management  
- ✅ Role-based user support  
- ✅ Error handling and input validation  

---

### 🚀 Getting Started

#### 1. Clone the repository
```bash
git clone https://github.com/your-username/auth-api.git
cd auth-api
```

#### 2. Install dependencies
```bash
npm install
```

#### 3. Set up environment variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

#### 4. Start the server
```bash
npm start
```

---

### 📮 API Endpoints

#### **POST /register**
Registers a new user.

**Request Body:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "role": "user",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully..",
  "token": "jwt_token_here"
}
```

---

#### **POST /login**
Authenticates an existing user.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "success": true,
  "message": "user logged in successfully",
  "token": "jwt_token_here"
}
```

---

### 🧠 Technologies Used

| Tool        | Purpose                     |
|-------------|-----------------------------|
| Node.js     | Backend runtime             |
| Express     | Web framework               |
| MongoDB     | Database                    |
| Mongoose    | ODM for MongoDB             |
| bcrypt      | Password hashing            |
| jsonwebtoken| Token-based authentication  |

---

### 🛠️ To Do

- Add token verification middleware  
- Implement logout functionality  
- Add user profile and update endpoints  
- Improve error messages and validation  

---

### 📄 License

This project is licensed under the MIT License.
