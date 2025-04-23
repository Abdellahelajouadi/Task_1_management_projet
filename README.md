#  Application de gestion des tâches – Étape 1 : Configuration du backend (pile MERN)

Ce projet fait partie d'une application de gestion des tâches full-stack utilisant la pile **MERN** : **MongoDB, Express.js, React et Node.js**.

---

## ✅ Step 1: Project Setup and Backend Configuration

In this step, we set up the backend server using **Node.js**, **Express**, and connect it to **MongoDB Atlas** using **Mongoose**. We also prepare environment variables and create a test route to verify our backend is working.

---

## 📁 Folder Structure

```
FINAL PROJECT/
├── backend/
│   ├── server.js
│   ├── .env
│   ├── package.json
│   └── ...
```

---

## ⚙️ Technologies Used

- Node.js
- Express.js
- MongoDB (via MongoDB Atlas)
- Mongoose
- Dotenv
- Cors
- Nodemon (for development)

---

## 📦 Installation Instructions

1. **Clone the Repository**
   ```bash
   git clone <your-repo-url>
   cd backend
   ```

2. **Install Dependencies**
   ```bash
   npm install
   npm install --save-dev nodemon
   ```

3. **Set Up Environment Variables**

   Create a file named `.env` in the `backend/` folder:

   ```env
   PORT=3000
   MONGO_URI=mongodb+srv://<your-username>:<your-password>@cluster0.mongodb.net/<your-db-name>
   ```

   Replace the values with your MongoDB Atlas credentials.

4. **Run the Server**

   ```bash
   npm run dev
   ```

   Output should look like this:

   ```
   ✅ MongoDB connected
   ✅ Server is running on http://localhost:3000
   ```

5. **Test the API**

   Open your browser and go to: [http://localhost:3000](http://localhost:3000)

   You should see:

   ```
   Task Manager API is running 😎🤙
   ```

---

## 📄 Sample `server.js` File

```js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
// Test route
app.get('/', (req, res) => {
  res.send(' API fonctionne !')
});
// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(" Connecté à MongoDB");

    app.listen(PORT, () => console.log(` Serveur lancé sur http://localhost:${PORT}`));
  })
   .catch(err => console.error(" Erreur MongoDB :", err));


```

---

## 📄 .gitignore Recommendations

To prevent pushing sensitive or unnecessary files to GitHub:

```
# IDE folders
.vscode/
.idea/

# Node modules
backend/node_modules/

# Environment variables
backend/.env
```

---

## 📌 What’s Next?

✅ Step 1 completed successfully.  
➡️ Proceed to **Step 2: User Authentication and Authorization**
