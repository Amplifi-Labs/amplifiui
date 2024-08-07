import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-gray-800 min-h-screen flex flex-col items-center justify-center text-white">
        <img src={logo} className="h-40 w-40 animate-spin-slow" alt="logo" />
        <p className="text-2xl">
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-blue-500 hover:text-blue-300"
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

export default App;
