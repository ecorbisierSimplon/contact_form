// User.ts
import { subject, firstname, lastname, email, message } from "../routes/contact";

export class controllersContact {
  private static subjectRegex = /^([A-Za-z\-]{1,70})$/; //max lenght 70
  private static nameRegex = /^[A-Za-z\-]+$/;
  private static emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,3}$/;


  public static validateUserInputs(): { [key: string]: string } {


    const errors: { [key: string]: string } = {};


    if (!this.nameRegex.test(firstname)) {
      errors.firstname = 'The firstname must contain letters';
    }

    if (!this.nameRegex.test(lastname)) {
      errors.lastname = 'The lastname must contain letters';
    }


    if (!this.emailRegex.test(email)) {
      errors.email = 'The e-mail is not available.';
    }

    // MANQUE SUBJECT

    if (Object.keys(errors).length > 0) {
      errors.validation = "false";
    } else {
      errors.validation = "true";
    };

    return errors;
  }
}