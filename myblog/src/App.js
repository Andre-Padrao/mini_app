import { useEffect, useState } from 'react'
import './App.css';

function App() {
  const [mas, setMas] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/')
      .then(res => res.json())
      .then(data => setMas(data))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h3>Artes marciais</h3>
        {mas && mas.map(ma => (
          <div key={ma.id}>{ma.name}</div>
        ))}
      </header>
    </div>
  );
}


export default  App;
