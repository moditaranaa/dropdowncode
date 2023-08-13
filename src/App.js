import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <h1>React SkillTest 1 </h1>
      <h3>Dropdown Menu </h3>
      <label htmlFor="dropdown">Choose a fruit : </label>
      <select id="dropdown" onChange={handleOptionChange}>
              <option value="">Select an option</option>
        <option value="Mango">Mango</option>
        <option value="Orange">Orange</option>
        <option value="Banana">Banana</option>
      </select>
      {selectedOption && <p>You selected: {selectedOption}</p>}
    </div>
  );
}

export default App;
