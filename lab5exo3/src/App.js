import React, { useState } from 'react';

const Exo3Component = () => {
  const [values, setValue] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue(values.concat({ username, password }));
    setUsername('');
    setPassword('');
  };

  const handleDelete = (username) => {
    const updatedValues = values.filter((user) => user.username !== username);
    setValue(updatedValues);
  };
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input type="text" value={username} onChange={handleUsernameChange} />
        <br />
        <label>Password: </label>
        <input type="password" value={password} onChange={handlePasswordChange} />
        <button type="submit">Submit</button>
      </form>

      <ul>
      {values.map(({ username, password }) => (
  <div key={username}>
    <li >username: {username} password: {password}</li>
    <button onClick={() => handleDelete(username)}>Delete</button>
  </div>
))}
      </ul>
    </div>
  );
};

function App() {
  return (
    <div>
      <Exo3Component />
    </div>
  );
}

export default App;
