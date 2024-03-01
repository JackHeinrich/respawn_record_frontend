import axios from "../../util/axios";

const apiUrl = 'users/validate_jwt'; // Replace 'your_port' and 'endpoint' with your actual API URL

const create_user = async (token: string) => {
  try {
    const payload = { token: token }
    const response = await axios.post(apiUrl, payload);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default create_user;