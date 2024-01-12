import { emailRegex } from '@const/regex';

export const validateEmail = (value: string) => {
    return emailRegex.test(value);
};
