import {
  email,
  lastname,
  firstname,
} from "../routes/contact";
import client from "../database";


export async function insertUser(currentDate: Date): Promise<void> {

  try {
    const query =
      "INSERT INTO users (first_name, last_name, email, date_create) VALUES ($1, $2, $3, $4)";
    const values = [
      firstname,
      lastname,
      email,
      currentDate,
    ];

    await client.query(query, values);

    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error; // Propager l'erreur pour la gérer dans la route
  }
}