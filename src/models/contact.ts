import client from '../database';
import { subject, firstname, lastname, email, message } from "../routes/contact";

export class Contact {

  static async register(): Promise<boolean> {
    try {
      const values = [subject, firstname, lastname, email, message, "NOW"];
      const query = 'INSERT INTO formulaire (subject, last_name, first_name, email, message, date_create) VALUES ($1, $2,$3, $4,$5, $6)';

      await client.query(query, values);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
      return false
    }
    return true;
  };
}