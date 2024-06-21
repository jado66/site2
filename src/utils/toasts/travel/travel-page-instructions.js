import { toast } from 'react-toastify';

export const travelPageInstructionsToast = () => {
  toast.info('This is just an example website.', {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 10000,
    toastId: 'travelPageInstructionToast',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
