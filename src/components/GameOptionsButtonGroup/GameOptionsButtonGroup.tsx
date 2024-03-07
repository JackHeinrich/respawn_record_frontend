import "./GameOptionsButtonGroup.css";

import GameOptionsButton from "../GameOptionsButton/GameOptionsButton";

import hasGame from "../../functions/igdb/hasGame";

import createGame from "../../functions/igdb/createGame";

import createPlayedRelationship from "../../functions/neo4j/createPlayedRelationship";

interface Props {
  game: {};
  validUser?: {};
}

export default function GameOptionsButtonGroup({ game, validUser }: Props) {
  const dbHasGame = async () => {
    const response = await hasGame(game.id);
    if (!validUser) {
      return false;
    }

    if (response.data.status == "Success") {
      return true;
    } else {
      await createGame(game);
      return true;
    }
  };

  const newPlayedRelationship = async () => {
    if (await dbHasGame()) {
      const response = await createPlayedRelationship(game, validUser);
      console.log(response);
    }
  };

  return (
    <div className="right-oriented">
      <GameOptionsButton
        iconClassName="bi bi-play-circle"
        label="Play"
        clickFunction={newPlayedRelationship}
        altLabel="Played"
      />
      <GameOptionsButton
        iconClassName="bi bi-heart"
        label="Like"
        clickFunction={dbHasGame}
        altLabel="Unlike"
      />
      <GameOptionsButton
        iconClassName="bi bi-clock"
        label="Playlist"
        clickFunction={dbHasGame}
        altLabel="In Playlist"
      />
      <GameOptionsButton
        iconClassName="bi bi-chat-left-text"
        label="Review"
        clickFunction={dbHasGame}
        altLabel="Review"
      />
    </div>
  );
}
