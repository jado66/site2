import { toast } from 'react-toastify';

export const educationPageIsJustExampleToast = () => {
  toast.info('This education page is just an example to demonstrate the Chatbot widget', {
    position: toast.POSITION.BOTTOM_RIGHT,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
