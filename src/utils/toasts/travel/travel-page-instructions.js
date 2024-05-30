import { toast } from 'react-toastify';

export const travelPageInstructionsToast = () => {
  toast.info('This is just a mock website page example.', {
    position: toast.POSITION.BOTTOM_CENTER,
    autoClose: 10000,
    toastId: 'travelPageInstructionToast',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
