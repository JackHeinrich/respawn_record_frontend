import { useState, useEffect } from "react";
import getGameCover from "../../functions/igdb/getCoverBygame";

import GameOptionsButtonGroup from "../GameOptionsButtonGroup/GameOptionsButtonGroup";

import "./GameListCard.css";

interface Props {
  game: {};
  validUser?: {};
}

export default function GameListCard({ game, validUser }: Props) {
  const [coverUrl, setCoverUrl] = useState("");

  useEffect(() => {
    const loadCover = async (coverId) => {
      const coverData = await getGameCover(coverId);
      setCoverUrl(coverData?.data[0]?.url);
    };

    loadCover(game.cover);
  }, [game.cover]);

  return (
    <li className="list-group-item">
      <div className="game-list-card">
        {game && (
          <>
            {coverUrl && (
              <img
                src={coverUrl
                  ?.replace(/^\/\//, "https://")
                  .replace("t_thumb", "t_cover_big")}
                alt={game.name}
                className="game-cover"
              />
            )}
            <div>
              <p className="fs-1 fw-bolder">{game.name}</p>
              <p className="text-body-secondary">{game.summary}</p>
            </div>
          </>
        )}
      </div>
      <GameOptionsButtonGroup game={game} validUser={validUser} />
    </li>
  );
}
