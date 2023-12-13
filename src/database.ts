import dotenv from "dotenv";
dotenv.config();

console.log(process.env.POSTGRES_USER);

const { Client } = require('pg')
const client = new Client({
  user: process.env.POSTGRES_USER,
  host: 'postgres_db',
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432
})

client.connect(function (err: any) {
  if (err) throw err;
  console.log("Postgres is connected!");
});

export default client;