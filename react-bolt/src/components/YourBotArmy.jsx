import React from 'react';
import BotCard from './BotCard';

function YourBotArmy({ bots, onRelease, onDischarge }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-grid">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onClick={() => onRelease(bot)}
            onDischarge={() => onDischarge(bot)}
            showDischarge={true}
          />
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
