import axios from "../../util/axios";

const apiUrl = 'users/get_users'; // Replace 'your_port' and 'endpoint' with your actual API URL

const getUsers = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default getUsers;