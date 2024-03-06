import "./SearchResults.css";
import { useState, useEffect } from "react";
import getGamesByName from "../../functions/igdb/getGamesByName";
import getGameCover from "../../functions/igdb/getCoverBygame";

interface Props {
  searchTerm: string;
}

export default function SearchResults({ searchTerm }: Props) {
  console.log(searchTerm);
  const [games, setGames] = useState([]);
  const [coverUrls, setCoverUrls] = useState({});

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const gamesData = await getGamesByName(searchTerm);
        setGames(gamesData?.data);
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, [searchTerm]);

  useEffect(() => {
    const loadCovers = async () => {
      const urls = {};
      for (const game of games) {
        const coverData = await getGameCover(game.cover);
        urls[game.id] = coverData?.data[0];
      }

      setCoverUrls(urls);
    };

    if (games.length > 0) {
      loadCovers();
    }
  }, [games]);

  console.log(coverUrls);

  return (
    <ul
      className="list-group"
      style={{ marginTop: 50, marginLeft: 100, marginRight: 100 }}
    >
      {games.map((game, key) => (
        <li key={key} className="list-group-item dark-bg">
          {game && (
            <>
              {coverUrls[game.id] && (
                <img
                  src={coverUrls[game.id]?.url
                    ?.replace(/^\/\//, "https://")
                    .replace("t_thumb", "t_cover_big")}
                  alt={coverUrls[game.id]?.url}
                />
              )}
              <div>{game.name}</div>
              <div>{game.summary}</div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
