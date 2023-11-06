import React, { useState } from 'react';
import BotsContainer from './BotsContainer';
import AddedBots from './AddedBots';
import '../App.css';

function FetchedBots() {
  const [enlistedBots, setEnlistedBots] = useState([]);

  const enlistBot = (bot) => {
    setEnlistedBots([...enlistedBots, bot]);
  };
  const handleDelete = (botToRemove) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot !== botToRemove));
  };
  return (
    <div className="fetchContainer">
        <AddedBots enlistedBots={enlistedBots} onDelete={handleDelete} />
      <h1>Galactic BOTS</h1>
      <BotsContainer enlistBot={enlistBot} onDelete={handleDelete} />
    </div>
  );
}

export default FetchedBots;
