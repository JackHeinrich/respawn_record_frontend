import axios from "../../util/axios";

const apiUrl = 'users/refresh_token'; // Replace 'your_port' and 'endpoint' with your actual API URL

const refreshToken = async () => {
  try {
    const response = await axios.get(apiUrl, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default refreshToken;