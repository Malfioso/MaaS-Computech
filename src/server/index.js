import express from 'express';
import { sql, connectToDatabase } from './db.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Connexion à la base de données et démarrage du serveur
connectToDatabase()
  .then(() => {
    // Définition des routes d'API
    app.get('/api/Arrets', async (req, res) => {
      try {
        const result = await sql.query('SELECT * FROM Arrets');
        res.json(result.recordset);
      } catch (error) {
        console.error("Erreur lors de la récupération des arrêts :", error);
        res.status(500).json({ error: "Une erreur s'est produite" });
      }
    });

    app.listen(port, () => {
      console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
      // Affiche le résultat de la requête SQL dans la console
      sql.query('SELECT * FROM Arrets', (err, result) => {
        if (err) {
          console.error('Erreur lors de la récupération des arrêts :', err);
        } else {
          console.log(result.recordset);
        }
      });
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la connexion à la base de données :", error);
  });