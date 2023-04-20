import React, { useState, useEffect } from 'react';

function Checkbox({ category, onCategoryChange }) {
  return (
    <div>
      <label className="checkbox-entry">
        <input
          type="checkbox"
          value={category.ID}
          onChange={onCategoryChange}
        />
        <span>{category.DisplayName}</span>
      </label>
    </div>
  );
}

export default Checkbox;
