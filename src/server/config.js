import sql from 'mssql/msnodesqlv8';


const config = {
  user: 'Maas_TEAM',
  password: "fm1!xµWùvfj1^$'à°X",
  server: 'computech-maas.database.windows.net',
  port: 1433,
  database: 'Computech_M2AS_2024-04-15T13-58Z',
  authentication: { type: 'default' },
  options: { encrypt: true, trustServerCertificate: false }
};

sql.connect(config, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Database connection successful');
  }
}
);