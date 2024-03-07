import axios from "../../util/axios";

const apiUrl = 'igdb/create_game/'; // Replace 'your_port' and 'endpoint' with your actual API URL

const createGame = async (game: {}) => {
  try {

    console.log(game)

    const payload = {name: game.name, id: game.id, summary: game.summary}

    const response = await axios.post(apiUrl, payload);
    console.log(response)

    return response;
  } catch (error) {
    return (error.response)
  }
};

export default createGame;