export const validateName = (name) => {
  const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
    return nameRegex.test(name)
  };
  
  export const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  export const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };
  