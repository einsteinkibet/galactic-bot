import React from 'react';

function BotDetails({ bot, onClose, enlistBot }) {
  if (!bot) {
    return null;
  }

  const handleEnlist = () => {
    enlistBot(bot);
  };

  return (
    <div className="botsDetails">
      <div key={bot.id} className="bots">
        <img src={bot.avatar_url} alt={bot.name} />
        <h2>{bot.name}</h2>
        <p>{bot.catchphrase}</p>
        <div id="stats">
          <p>{bot.health}</p>
          <p>{bot.damage}</p>
          <p>{bot.armor}</p>
        </div>
        <button className="enlist" onClick={handleEnlist}>Enlist</button>
        <button onClick={onClose}>Go Back</button>
      </div>
    </div>
  );
}

export default BotDetails;
