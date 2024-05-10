import sql from 'mssql';

const config = {
  user: 'Maas_TEAM',
  password: "fm1!xµWùvfj1^$'à°X",
  server: 'computech-maas.database.windows.net',
  port: 1433,
  database: 'Computech_M2AS_2024-04-15T13-58Z',
  authentication: {
    type: 'default'
  },
  options: {
    encrypt: true,
    trustServerCertificate: false
  }
};

console.log("Starting...");
connectAndQuery();


async function connectAndQuery() {
    try {
        var poolConnection = await sql.connect(config);

        // Connexion réussie
        console.log("Connected to the database.");

        // Requête pour obtenir les noms de toutes les tables
        var tableNames = await poolConnection.request().query(`
            SELECT TABLE_NAME
            FROM INFORMATION_SCHEMA.TABLES
            WHERE TABLE_TYPE = 'BASE TABLE'
            AND TABLE_CATALOG = '${config.database}'
        `);

        console.log("Tables in the database:");
        tableNames.recordset.forEach(row => {
            console.log(row.TABLE_NAME);
        });

        // Fermeture de la connexion
        poolConnection.close();
    } catch (err) {
        console.error(err.message);
    }
}