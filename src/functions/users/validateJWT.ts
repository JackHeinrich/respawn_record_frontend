import axios from "../../util/axios";

const apiUrl = 'users/validate_jwt'; // Replace 'your_port' and 'endpoint' with your actual API URL

const validateJWT = async () => {
  try {
    const response = await axios.get(apiUrl, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default validateJWT;