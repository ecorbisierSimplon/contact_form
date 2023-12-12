import client from "../database";
import {
  subject,
  firstname,
  lastname,
  email,
  message,
} from "../routes/contact";

class User {
  async register(): Promise<boolean> {
    try {
      const values = [
        subject,
        firstname,
        lastname,
        email,
        message,
      ];
      const query =
        "INSERT INTO formulaire (subject, last_name, first_name, email, message ) VALUES ($1, $2,$3,$4,$5)";

      await client.query(query, values);
    } catch (error) {
      console.error("Erreur lors de la sauvegarde des données :", error);
      return false;
    }
    return true;
  }
}