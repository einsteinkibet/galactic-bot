import React from 'react';

function AddedBots({ enlistedBots, onDelete }) {
  const handleDelete = (bot) => {
    onDelete(bot);
  }
  return (
    <div className="addedBots">
      <h1>My BOT army</h1>
      {enlistedBots.length === 0 ? (
        <p>No enlisted bots</p>
      ) : (
        <div className="enlistedBotsContainer">
          {enlistedBots.map((bot) => (
            <div key={bot.id} className="addedBot">
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>{bot.catchphrase}</p>
              <div id="stats">
                <p>{bot.health}</p>
                <p>{bot.damage}</p>
                <p>{bot.armor}</p>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AddedBots;
