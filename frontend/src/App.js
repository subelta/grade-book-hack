import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Endpoints } from './constants';

export const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(Endpoints.SUBJECT_DATA)
        .then(resp => resp.json())
        .then(console.log)
  }, [])


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
