const { Client } = require('pg')
const client = new Client({
  user: 'root',
  host: 'localhost',
  database: 'contact_form',
  password: 'password',
  port: 5433
})

client.connect(function(err: any) {
  if (err) throw err;
  console.log("Connected!");
});

export default client;