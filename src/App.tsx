import React, { useEffect, useState } from 'react';
// import logo from './logo.svg';
import { Link, useLocation } from 'react-router-dom';
import AppComponents from './routes';
import './App.css';

function App() {
  const [activeItem, setActiveItem] = useState('');
  const location = useLocation();
  // switch (expr) {
  //   case '/':
  //    setActiveItem(expr);
  //     break;
  //   case 'Mangoes':
  //     setActiveItem(expr);
  //   case 'Papayas':
  //     console.log('Mangoes and papayas are $2.79 a pound.');
  //     // Expected output: "Mangoes and papayas are $2.79 a pound."
  //     break;
  //   default:
  //     console.log(`Sorry, we are out of ${expr}.`);
  // }

  useEffect(() => {
    setActiveItem(location.pathname);
  });

  return (
    <div>
      <nav className='nav'>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}

        <ul>
          <li className={activeItem === '/' ? 'active' : ''}>
            <Link to='/'>Home</Link>
          </li>
          <li className={activeItem === '/tictactoe' ? 'active' : ''}>
            <Link to='/tictactoe'>TicTacToe</Link>
          </li>
          <li className={activeItem === '/autocomplete' ? 'active' : ''}>
            <Link to='/autocomplete'>Autocomplete</Link>
          </li>
          <li className={activeItem === '/testing' ? 'active' : ''}>
            <Link to='/testing'>Testing</Link>
          </li>
          <li className={activeItem === '/logviewer' ? 'active' : ''}>
            <Link to='/logviewer'>LogViewer</Link>
          </li>
        </ul>
      </nav>
      <div className='container'>
        <AppComponents />
      </div>
    </div>
  );
}

export default App;
