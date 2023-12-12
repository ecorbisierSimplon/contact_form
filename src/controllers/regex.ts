export const nameRegex: RegExp = /^[a-zA-ZÀ-ÖØ-öø-ÿ\s'-]+$/;
export const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const phoneRegex: RegExp = /^(?:(?:(?:(?:\+|00)33\s?|0)[1-9](?:(?:(?:\s?\d){8})|(?:(?:\d{2}\s?){4}\d{2})))|)$/g;
export const subjectRegex: RegExp = /^([A-Za-z0-9\s\-.,]+)$/;
export const messageRegex: RegExp = /^.+$/s;

export function validateMinLength(value: string, minLength: number): boolean {
    return value.length >= minLength;
}

export function validateMaxLength(value: string, maxLength: number): boolean {
    return value.length <= maxLength;
}