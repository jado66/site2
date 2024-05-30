import { toast } from 'react-toastify';

export const travelPageIsJustExampleToast = () => {
  const id = 'travel-page-is-just-example-toast';

  toast.info('This travel page is just an example to demonstrate our development capabilites', {
    position: toast.POSITION.BOTTOM_RIGHT,
    toastId: id,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
