function apiRequestOriginValidation(req) {
  return process.env.SECRET === 'JD_IS_AWESOME';
}

export default apiRequestOriginValidation;
