import React from 'react';

const classes = ["Support", "Medic", "Assault", "Defender", "Captain", "Witch"];

function FilterBar({ filters, onToggle }) {
  return (
    <div className="filter-bar">
      {classes.map(cls => (
        <label key={cls}>
          <input
            type="checkbox"
            checked={filters.includes(cls)}
            onChange={() => onToggle(cls)}
          />
          {cls}
        </label>
      ))}
    </div>
  );
}

export default FilterBar;