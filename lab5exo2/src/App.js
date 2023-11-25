import React, { useState } from 'react';

const DisplayTab = (props) => {
  const [value, setValue] = useState(props.tab);

  const handleDelete = (index) => {
    const newValue = value.filter((itemInArray, i) => i !== index);
    setValue(newValue);
  };

  return (
    <ul>
      {value.map((item, index) => (
        <li onClick={() => handleDelete(index)}>
          Element {index + 1} is: {item}
        </li>
      ))}
    </ul>
  );
};

function App() {
  return (
    <div>
      <DisplayTab tab={['hello', 'world', 'from', 'react']} />
      <DisplayTab tab={['one', 'two', 'three', 'free', 'Palastine']} />
    </div>
  );
}

export default App;
