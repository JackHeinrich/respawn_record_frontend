import axios from "../../util/axios";

const apiUrl = 'igdb/get_games/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const getGamesByName = async (gameName: string) => {
  try {
    const fullUrl = apiUrl + gameName
    const response = await axios.get(fullUrl);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default getGamesByName;