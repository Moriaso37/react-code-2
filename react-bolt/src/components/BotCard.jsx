import React from 'react';

function BotCard({ bot, onClick }) {
  return (
    <div className="bot-card" onClick={onClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>{bot.catchphrase}</p>
      <p><strong>{bot.bot_class}</strong></p>
    </div>
  );
}

export default BotCard;
