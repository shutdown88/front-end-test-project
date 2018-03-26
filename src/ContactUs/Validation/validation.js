const isValidName = name => name && name.trim().length > 0;

const isValidEmail = email =>
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(email);

const isValidPhone = phone => /^\d{1,11}$/.test(phone);

export { isValidName, isValidEmail, isValidPhone };
