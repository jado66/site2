import { useState } from 'react';

const useSubscribe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const subscribe = async (email) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('/_api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.status === 200) {
        setSuccess(true);
      } else {
        const error = await response.json();

        if (error.status === 400) {
          setError('This email is already subscribed.');
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
