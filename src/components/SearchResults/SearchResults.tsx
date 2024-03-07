import { useState, useEffect } from "react";
import getGamesByName from "../../functions/igdb/getGamesByName";

import GameListCard from "../GameListCard/GameListCard";

import "./SearchResults.css";

interface Props {
  searchTerm: string;
  validUser?: {};
}

export default function SearchResults({ searchTerm, validUser }: Props) {
  const [games, setGames] = useState([]);

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

  return (
    <ul className="list-group search-results" data-bs-theme="dark">
      {games.length ? (
        games.map((game, key) => (
          <GameListCard key={key} game={game} validUser={validUser} />
        ))
      ) : (
        <h1 className="text-primary">No Results</h1>
      )}
    </ul>
  );
}
