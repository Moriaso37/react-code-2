import React, { useState, useEffect } from 'react';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import FilterBar from './components/FilterBar';

function App() {
  const [bots, setBots] = useState([]);
  const [armyBots, setArmyBots] = useState([]);
  const [selectedBot, setSelectedBot] = useState(null);
  const [sortBy, setSortBy] = useState('');
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  const handleEnlist = (bot) => {
    if (!armyBots.find((b) => b.bot_class === bot.bot_class)) {
      setArmyBots([...armyBots, bot]);
    }
  };

  const handleRelease = (bot) => {
    setArmyBots(armyBots.filter((b) => b.id !== bot.id));
  };

  const handleDischarge = (bot) => {
    fetch(`http://localhost:3000/bots/${bot.id}`, {
      method: "DELETE",
    }).then(() => {
      setArmyBots(armyBots.filter((b) => b.id !== bot.id));
      setBots(bots.filter((b) => b.id !== bot.id));
    });
  };

  const handleToggleFilter = (cls) => {
    setFilters(filters.includes(cls)
      ? filters.filter(f => f !== cls)
      : [...filters, cls]);
  };

  const filteredBots = bots.filter((bot) => {
    return filters.length === 0 || filters.includes(bot.bot_class);
  });

  const sortedBots = [...filteredBots].sort((a, b) => {
    if (!sortBy) return 0;
    return b[sortBy] - a[sortBy];
  });

  return (
    <div className="App">
      <h1>Bot Battlr</h1>
      <YourBotArmy bots={armyBots} onRelease={handleRelease} onDischarge={handleDischarge} />
      <SortBar sortBy={sortBy} onChange={setSortBy} />
      <FilterBar filters={filters} onToggle={handleToggleFilter} />

      {selectedBot ? (
        <BotSpecs
          bot={selectedBot}
          onEnlist={handleEnlist}
          onBack={() => setSelectedBot(null)}
        />
      ) : (
        <BotCollection bots={sortedBots} onEnlist={(bot) => setSelectedBot(bot)} />
      )}
    </div>
  );
}

export default App;
