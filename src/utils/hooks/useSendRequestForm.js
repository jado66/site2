import { useState } from 'react';
import { toast } from 'react-toastify';

const useSendRequestForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const sendRequestFormByEmail = async (formData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/send-request-form-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'New Contact Request Form: ',
          html: '<pre>'+JSON.stringify(formData)+'</pre>'}),

      });

      if (response.status === 200) {
        setSuccess(true);
        toast.success('Your request has been succesfully sent. We will get back to you soon.');
      } else {
        const error = await response.json();

        if (response.status === 400) {
          setError('Bad Request. Please check your form data.');
        } else if (response.status === 408) {
          setError('Request Timed Out. Looks like you are offline.');
        } else {
          const errorMessages =error;
        }
      }
    } catch (err) {
      setError('Error: ' + err.message);
      alert('Error22: ' + err.message)

    }

    setLoading(false);
  };

  return { loading, error, success, sendRequestFormByEmail };
};

export default useSendRequestForm;
