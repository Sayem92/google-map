import logo from './logo.svg';
import './App.css';
import MyLocation from './components/MyLocation';
import Direction from './components/Direction';
import { useState } from 'react';

function App() {
  const [origin, setOrigin] = useState('')
  const [destination, setDestination] = useState('')

  const displayDirection = (e) => {
    e.preventDefault()
    const start = e.target.origin.value;
    const end = e.target.destination.value;
    setOrigin(start)
    setDestination(end)
  }

  return (
    <div className="App">
      <form onSubmit={displayDirection}>
        <input type="text" name="origin" required />
        <br />
        <input type="text" name="destination" required />
        <br />
        <input type="submit" value="Show Direction"></input>
      </form>

      <MyLocation></MyLocation>
      <Direction
        origin={origin}
        destination={destination}
      ></Direction>
    </div>
  );
}

export default App;
