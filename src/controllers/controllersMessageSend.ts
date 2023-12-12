// User.ts
import { nameRegex, emailRegex, phoneRegex, subjectRegex, messageRegex, validateMinLength, validateMaxLength } from "./regex";

export class ControllersMessageSend {

  public static validateMessageInputs(subject: string, lastname: string, firstname: string, email: string, phone: string, message: string): { [key: string]: string | null } {

    // Usage
    let errors: { [key: string]: string | null } = {};
    errors.validation = "true";

    const validateField = (
      name: string,
      value: string,
      regex: RegExp,
      minLength: number,
      maxLength?: number
    ): string | null => {
      if (!regex.test(value)) {
        errors.validation = "false";
        return `The ${name} is not available.`;
      }

      if (!validateMinLength(value, minLength)) {
        errors.validation = "false";
        return `The ${name} must have at least ${minLength} characters.`;
      }

      if (maxLength && !validateMaxLength(value, maxLength)) {
        errors.validation = "false";
        return `The ${name} must not exceed ${maxLength} characters.`;
      }

      return null;
    };

    errors.firstname = validateField("first name", firstname, nameRegex, 3, 70);
    errors.lastname = validateField("last name", lastname, nameRegex, 3, 70);
    errors.email = validateField("email", email, emailRegex, 3, 70);
    errors.phone = validateField("phone", phone, phoneRegex, 0, 20);
    errors.subject = validateField("subject", subject, subjectRegex, 3, 70);
    errors.message = validateField("message", message, messageRegex, 3, 255);


    return errors;
  }
}