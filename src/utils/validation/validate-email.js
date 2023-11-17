function validateEmail(email) {
  // eslint-disable-next-line no-useless-escape
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

export default validateEmail;
