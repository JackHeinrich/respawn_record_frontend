import axios from "../../util/axios";

const apiUrl = 'steam/get_game/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const get_game = async (appId: number) => {
  try {
    console.log(apiUrl)
    const response = await axios.get(apiUrl + appId);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default get_game;