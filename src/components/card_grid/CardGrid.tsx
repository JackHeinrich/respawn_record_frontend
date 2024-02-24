import React, { useEffect, useState } from 'react';
import GameCard from '../game_card/GameCard';
import get_all_games from '../../functions/get_all_games';

import './CardGrid.css';

export default function CardGrid() {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const allGames = await get_all_games();
      setGames(allGames);
    };

    fetchGames();
  }, []);

  console.log(games)

  return (
    <div className="grid-container">
        <GameCard/>
    </div>
  );
}
