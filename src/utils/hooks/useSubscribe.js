import { useState } from 'react';
import { toast } from 'react-toastify';

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setSuccess(true);
        toast.success('You have successfully subscribed to our newsletter.');
      } else {
        const error = await response.json();

        if (response.status === 400) {
          setError('This email is already subscribed.');
        } else if (response.status === 408) {
          setError('Request Timed Out. Looks like you are offline.');
        } else {
          const errorMessages = JSON.parse(error.response.text);
          setError('Error: ' + errorMessages.title);
        }
      }
    } catch (err) {
      setError('error' + JSON.stringify(err));
    }

    setLoading(false);
  };

  return { loading, error, success, subscribe };
};

export default useSubscribe;
