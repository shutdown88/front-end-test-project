import { isValidName, isValidEmail, isValidPhone } from './validation';

describe('Validation', () => {
    describe('validating name', () => {
        test('should not validate empty name', () => {
            expect(isValidName('')).toBeFalsy();
        });

        test('should not validate spaces', () => {
            expect(isValidName('   ')).toBeFalsy();
        });

        test('should validate a string with not empty charachters', () => {
            expect(isValidName(' John  Doe ')).toBeTruthy();
        });
    });

    describe('validating email', () => {
        test('should not validate spaces', () => {
            expect(isValidEmail('   ')).toBeFalsy();
        });

        test('should not validate a generic string', () => {
            expect(isValidEmail('email')).toBeFalsy();
        });

        test('should not validate a generic domain', () => {
            expect(isValidEmail('@email.com')).toBeFalsy();
        });

        test('should not validate a mail without domain', () => {
            expect(isValidEmail('test@')).toBeFalsy();
            expect(isValidEmail('test@email')).toBeFalsy();
            expect(isValidEmail('test@email.')).toBeFalsy();
        });

        test('should validate a proper mail', () => {
            expect(isValidEmail('test@email.com')).toBeTruthy();
        });
    });

    describe('validating phone', () => {
        test('should not validate spaces', () => {
            expect(isValidPhone('   ')).toBeFalsy();
        });

        test('should not validate charachter', () => {
            expect(isValidPhone('s 1s a ')).toBeFalsy();
        });

        test('should validate a 11 digits phone number', () => {
            expect(isValidPhone('11111111111')).toBeTruthy();
        });

        test('should not validate a 12 digits phone number', () => {
            expect(isValidPhone('111111111112')).toBeFalsy();
        });
    });
});
