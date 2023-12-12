import client from '../database';

export class MessageSendSave {

  static async saveDatabase(subject: string, lastname: string, firstname: string, email: string, phone: string, message: string): Promise<boolean> {
    console.log("MessageSend : save Database");
    try {
      const values = [firstname, lastname, email, phone, subject, message, new Date()];
      const query = 'INSERT INTO message_send (last_name, first_name, email, phone_number, subject, message, date_create) VALUES ($1, $2, $3, $4, $5, $6, $7)';
      await client.query(query, values);
    } catch (error) {
      console.error('Erreur lors de la sauvegarde des données :', error);
      return false;
    }
    return true;
  }
}