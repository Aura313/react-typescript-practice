import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TicTacToe from './pages/TicTacToe';
import Autocomplete from './components/Autocomplete';
import Testing from './components/Testing';
// import LoadingScreen from './pages/LoadingScreen';
import LogViewer from './pages/LogViewer';
import Home from './pages/Home';
const suggestions = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Fig',
  'Grape',
  'Mango',
  'Orange',
];

//Input for : Find the position of the first duplicate element in a string.

const inputStr = 'abcaedf'; // first duplicate element is "a", which appears at positions 0 and 3 (using 0-based indexing). So, the position of the first duplicate element is 3.
const inputStr1 = 'abcaedf'; // Expected output: 3 (because 'a' is the first duplicated character)
const inputStr2 = 'hello'; // Expected output: 3 (because 'l' is the first duplicated character)
const inputStr3 = 'abcdefg'; // Expected output: -1 (no duplicated character)
const inputStr4 = 'aabbcc'; // Expected output: 1 (because 'a' is the first duplicated character)
const inputStr5 = 'green'; // Expected output: 3 (because 'e' is the first duplicated character)
const inputStr6 = 'abcdefghijkalmnop'; // Expected output: 11 (because 'a' is the first duplicated character)
const inputStr7 = 'abcdefgh';

//Input for : - Concatenate two arrays and find the unique element from it.
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

const logs = [
  { id: 1, title: 'Log 1', details: 'Some details about log 1' },
  { id: 2, title: 'Log 2', details: 'Some details about log 2' },
  { id: 3, title: 'Log 2', details: 'Some details about log 3' },
  { id: 4, title: 'Log 2', details: 'Some details about log 4' },
  { id: 5, title: 'Log 2', details: 'Some details about log 5' },
  { id: 6, title: 'Log 2', details: 'Some details about log 6' },
  { id: 7, title: 'Log 2', details: 'Some details about log 7' },
  { id: 8, title: 'Log 2', details: 'Some details about log 8' },
  { id: 9, title: 'Log 2', details: 'Some details about log 9' },
  { id: 10, title: 'Log 2', details: 'Some details about log 10' },
  { id: 11, title: 'Log 2', details: 'Some details about log 11' },
  { id: 12, title: 'Log 2', details: 'Some details about log 12' },
  { id: 13, title: 'Log 2', details: 'Some details about log 13' },
  { id: 14, title: 'Log 2', details: 'Some details about log 14' },
  // ... add as many logs as you need
];

const AppComponents = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tictactoe' element={<TicTacToe />} />
      <Route
        path='/autocomplete'
        element={<Autocomplete suggestions={suggestions} />}
      />
      <Route
        path='/testing'
        element={
          <Testing inputStr={inputStr7} array1={array1} array2={array2} />
        }
      />
      <Route path='/logviewer' element={<LogViewer logs={logs} />} />
    </Routes>
  );
};

export default AppComponents;
