import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db.js";
import arrets from "./endpoint/Arrets.js";
import horaires from "./endpoint/Horraires.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use(
  cors({
    origin: "*", // Autorise toutes les origines
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Connexion à la base de données
connectToDatabase()
  .then(() => {
    // Utilisation de la fonction arrets après la connexion à la base de données
    arrets(app);
    horaires(app);

    // Démarrer le serveur
    app.listen(port, () => {
      console.log(`Serveur en cours d'exécution sur le port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à la base de données :", error);
  });
