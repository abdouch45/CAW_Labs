import React,{useState} from 'react';
import ButtonComponent from './button.js';
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrement}>Inc</button>
      <button onClick={handleDecrement}>Dec</button>
    </div>
  );
};


const App = () => {
  return (
    <div>
      <ButtonComponent buttonNumber={1} />
      <ButtonComponent buttonNumber={2} />
      <ButtonComponent buttonNumber={3} />
      <Counter></Counter>

    </div>
  );
};

export default App;
