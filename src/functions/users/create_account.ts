import axios from "../../util/axios";

const apiUrl = 'users/create_user'; // Replace 'your_port' and 'endpoint' with your actual API URL

const create_user = async (email: string, username: string, password: string) => {
  try {
    const payload = { email: email, username: username, password: password }
    const response = await axios.post(apiUrl, payload);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default create_user;