const { Client } = require('pg')
const client = new Client({
  user: 'root',
  host: 'postgres_db',
  database: 'contact-form',
  password: 'password',
  port: 5432
})

client.connect(function (err: any) {
  if (err) throw err;
  console.log("Submit!");
});

export default client;