import { toast } from 'react-toastify';

export const travelPageInstructionsToast = () => {
  toast.info(
    'This is just a mock travel page example. Here you can chat with a bot trained to assist customers with travel arrangments.',
    {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 10000,
      toastId: 'travelPageInstructionToast',
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    }
  );
};
