import axios from "../../util/axios";

const apiUrl = 'steam/get_all_games'; // Replace 'your_port' and 'endpoint' with your actual API URL

const get_all_games = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default get_all_games;