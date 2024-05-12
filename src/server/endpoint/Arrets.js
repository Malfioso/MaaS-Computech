import { sql } from "../db.js";

const arrets = (app) => {
  app.get("/api/Arrets", async (req, res) => {
    try {
      const result = await sql.query("SELECT * FROM Arrets");
      res.json(result.recordset);
    } catch (error) {
      console.error("Erreur lors de la récupération des arrêts :", error);
      res.status(500).json({ error: "Une erreur s'est produite" });
    }
  });
};

export default arrets;
