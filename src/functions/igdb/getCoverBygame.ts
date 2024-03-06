import axios from "../../util/axios";

const apiUrl = 'igdb/get_game_cover/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const getGameCover = async (coverId: string) => {
  try {
    const fullUrl = apiUrl + coverId
    const response = await axios.get(fullUrl);
    return response;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default getGameCover;