import sql from 'mssql';

const config = {
  user: 'Maas_TEAM',
  password: "fm1!xµWùvfj1^$'à°X",
  server: 'computech-maas.database.windows.net',
  port: 1433,
  database: 'Computech_M2AS_2024-04-15T13-58Z',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

async function connectToDatabase() {
    try {
      await sql.connect(config);
      console.log(`Connexion réussie. Le nom de la base de données est : ${config.database}`);
    } catch (error) {
      console.error("Erreur lors de la connexion à la base de données :", error);
    }
  }

  export { sql, connectToDatabase };