// useValidateJWT.js
import { useState, useEffect } from 'react';

import validateJWT from '../functions/users/validateJWT';

const useValidateJWT = () => {
  const [validUser, setValidUser] = useState({}); // Change initial state to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await validateJWT();
        setValidUser(response);
      } catch (error) {
        console.error('Error validating JWT:', error);
        setValidUser({}); // Set validUser to null on error
      }
    };

    fetchData();
  }, []);

  return { validUser };
};

export default useValidateJWT;
