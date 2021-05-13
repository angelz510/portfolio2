import React from 'react';
import Header from './components/Header/Header';
import routes from './config/routes';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='app-container'>
        { routes }
      </div>
    </div>
  );
}

export default App;