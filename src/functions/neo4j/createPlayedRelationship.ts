import axios from "../../util/axios";

import validateJWT from "../users/validateJWT";

const apiUrl = 'neo4j/create_played_relationship'; // Replace 'your_port' and 'endpoint' with your actual API URL

const createPlayedRelationship = async (game: {}, user: {}) => {
  try {
    if (await validateJWT()) {
        const payload = { gameId: game.id, username: user.userProps.username}
        const response = axios.post(apiUrl, payload)
        return response
    } 

  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};

export default createPlayedRelationship;