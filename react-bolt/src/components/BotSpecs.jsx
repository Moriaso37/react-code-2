import React from 'react';

function BotSpecs({ bot, onEnlist, onBack }) {
  if (!bot) return null;

  return (
    <div className="bot-specs">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>{bot.catchphrase}</p>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health}</p>
      <p><strong>Damage:</strong> {bot.damage}</p>
      <p><strong>Armor:</strong> {bot.armor}</p>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onEnlist(bot)}>Enlist</button>
    </div>
  );
}

export default BotSpecs;
