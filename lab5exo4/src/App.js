import React, { useState } from 'react';

const Exo4Component = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [color, setColor] = useState('#ffffff');
  const [style, setStyle] = useState({ width: '0px', height: '0px', backgroundColor: '#ffffff' });

  const handleWidthChange = (event) => {
    setWidth(parseInt(event.target.value));
  };

  const handleHeightChange = (event) => {
    setHeight(parseInt(event.target.value));
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStyle({
      width: `${width}px`,
      height: `${height}px`,
      backgroundColor: color,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Width: </label>
        <input type="number" value={width} onChange={handleWidthChange} />
        <br />
        <label>Height: </label>
        <input type="number" value={height} onChange={handleHeightChange} />
        <br />
        <label>Color: </label>
        <input type="color" value={color} onChange={handleColorChange} />
        <br />
        <button type="submit">Submit</button>
      </form>

      <div style={style}></div>
    </div>
  );
};

function App() {
  return (
    <div>
      <Exo4Component />
    </div>
  );
}

export default App;
