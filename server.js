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

