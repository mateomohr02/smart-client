// const validate = (data) => {
//   let errors = {}

//   if (!data.email || !/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(data.email)) {
//       errors.contact = 'Por favor ingrese un email de contacto válido'
//   }

//   if (!data.phone  || !/^\d{10}$/.test(data.phone)) {
//       errors.phone = 'Por favor ingrese un número de teléfono válido'
//   }
//   if (!data.message) {
//       errors.message = 'Por favor ingrese un mensaje con su consulta'
//   }

//   return errors; 
// }

// export default validate


export const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  
  // Función para validar el número de teléfono (asumiendo un formato de 10 dígitos)
  export const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };
  
  // Función para validar el formulario
  export const isFormValid = (formData) => {
    const { name, lastName, email, phone, message } = formData;
  
    if (!name || !lastName || !email || !message) {
      return false; // Uno o más campos están vacíos
    }
  
    if (!isEmailValid(email)) {
      return false; // El correo electrónico no es válido
    }
  
    if (phone && !isPhoneNumberValid(phone)) {
      return false; // El número de teléfono no es válido
    }
  
    return true; // Todos los campos son válidos
  };