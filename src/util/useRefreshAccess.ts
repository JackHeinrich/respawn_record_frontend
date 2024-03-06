import { useState, useEffect } from 'react';

import refreshToken from '../functions/users/refreshAccessToken';

const useRefreshToken = () => {
  const [tokenData, setTokenData] = useState({}); // Change initial state to null

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await refreshToken();
        setTokenData(response);
      } catch (error) {
        console.error('Error validating JWT:', error);
        setTokenData({}); // Set validUser to null on error
      }
    };

    fetchData();
  }, []);

  return { tokenData };
};

export default useRefreshToken;
