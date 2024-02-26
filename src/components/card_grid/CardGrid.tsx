import { useEffect, useState } from 'react';
import GameCard from '../game_card/GameCard';
import get_all_games from '../../functions/steam/get_all_games';

import './CardGrid.css';

export default function CardGrid() {
  const [games, setGames] = useState({});

  useEffect(() => {
    const fetchGames = async () => {
      const allGamesObject = await get_all_games();
      setGames(allGamesObject);
    };

    fetchGames();
  }, []);

  const gameList = games['gameList'] || []; // Initialize with an empty array if gameList is undefined

  console.log("Number of games:", gameList.length);

  return (
    <div className="grid-container">
      {gameList.slice(0, 1001).map((game: {name: String, appid: number}, index: number) => (
        (game.name !== '' &&
          <GameCard key={index} gameName={game.name} appId={game.appid}/>
        )
      ))}
    </div>
  );
}
