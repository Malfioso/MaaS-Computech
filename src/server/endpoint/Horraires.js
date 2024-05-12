import { sql } from "../db.js";

const horaires = (app) => {
  app.get("/api/horaires", async (req, res) => {
    try {
      const result = await sql.query("SELECT * FROM horaires");
      res.json(result.recordset);
    } catch (error) {
      console.error("Erreur lors de la récupération des horaires :", error);
      res.status(500).json({ error: "Une erreur s'est produite" });
    }
  });
};

export default horaires;
