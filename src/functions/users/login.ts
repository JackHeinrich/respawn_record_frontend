import axios from 'axios';

const apiUrl = 'http://localhost:3000/api/users/login'; // Replace 'your_port' and 'endpoint' with your actual API URL

const login = async (email: string, password: string) => {
  try {
    const payload = { email: email, password: password }
    const response = await axios.post(apiUrl, payload);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default login;