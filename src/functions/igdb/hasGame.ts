import axios from "../../util/axios";

const apiUrl = 'igdb/has_game/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const hasGame = async (gameId: string) => {
  try {
    const fullUrl = apiUrl + gameId
    const response = await axios.get(fullUrl);
    return response;
  } catch (error) {
    return (error.response)
  }
};

export default hasGame;