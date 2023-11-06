import React, { useState, useEffect } from 'react';
import '../App.css';
import BotDetails from './BotDetails';

function BotsContainer({ enlistBot }) {
  const [bots, setBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/bots');
      const data = await response.json();
      setBots(data);
    };

    fetchData();
  }, []);

  const handleBotClick = (bot) => {
    setSelectedBot(bot);
    setIsOverlayOpen(true);
  };
  const handleDelete = (botToRemove) => {
    setEnlistedBots(enlistedBots.filter((bot) => bot !== botToRemove));
 }
  return (
    <div className="botsContainer">
      {bots.map((bot) => (
        <div key={bot.id} className="bots" onClick={() => handleBotClick(bot)}>
          <img src={bot.avatar_url} alt={bot.name} />
          <h2>{bot.name}</h2>
          <p>{bot.catchphrase}</p>
          <div id="stats">
            <p>{bot.health}</p>
            <p>{bot.damage}</p>
            <p>{bot.armor}</p>
          </div>
        </div>
      ))}
      {isOverlayOpen && (
        <BotDetails bot={selectedBot} onClose={() => setIsOverlayOpen(false)} enlistBot={enlistBot} />
      )}
    </div>
  );
}

export default BotsContainer;
