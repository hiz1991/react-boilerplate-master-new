export default function(values) {
  const errors = {};
  const requiredFields = [
    'phoneNumber'
  ];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.phoneNumber && !/^[0-9]{1,10}$/.test(values.phoneNumber)
  ) {
    errors.phoneNumber = 'Invalid phone number';
  }
  return errors;
}
