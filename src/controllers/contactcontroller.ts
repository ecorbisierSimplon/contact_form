import { firstname, lastname, email, confirmation } from "../routes/contact";

export class ControllerUser {
  private static nameRegex = /^[A-Za-z\-]+$/;
  private static emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]{2,}\.[a-zA-Z]{2,3}$/;
  
  public static validateUserInputs(): { [key: string]: string } {


    const errors: { [key: string]: string } = {};


    if (!ControllerUser.nameRegex.test(firstname)) {
      errors.firstname = 'The firstname must contain letters';
    }

    if (!ControllerUser.nameRegex.test(lastname)) {
      errors.lastname = 'The lastname must contain letters';
    }

    if (!ControllerUser.emailRegex.test(email)) {
      errors.email = 'The e-mail is not available.';
    }


    if (Object.keys(errors).length > 0) {
      errors.validation = "false";
    } else {
      errors.validation = "true";
    };
    
    return errors;
  }
}