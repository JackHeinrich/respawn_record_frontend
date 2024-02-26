import React, { useEffect, useState } from 'react';
import './GameCard.css';
import get_game from '../../functions/steam/get_game';

interface Props {
  gameName: string;
  appId: number;
}

export default function GameCard({ gameName, appId }: Props) {
  return (
    <div className="game-card">
      <img src={`https://cdn.akamai.steamstatic.com/steam/apps/${appId}/header.jpg?t=1686392775`} alt='...' />
      <div>
        <p>{gameName}</p>
      </div>
    </div>
  );
}
