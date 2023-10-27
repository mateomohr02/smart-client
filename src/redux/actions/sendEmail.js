import axios from "axios";

export function sendEmail(data) {
    return async function (dispatch) {
      try {
        const response = await axios.post("/contact", data);
        dispatch({
          type: 'SEND_EMAIL',
          payload: response.data
        });
      } catch (error) {
        console.error('Error al enviar el correo:', error);
      }
    };
  }