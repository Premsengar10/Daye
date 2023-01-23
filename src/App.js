import './App.css';
import React,{ useEffect } from 'react';
import ReactGA, { pageview } from 'react-ga'; 
import HomePage from './Components/HomePage';

function App() {
  useEffect(() =>{
    ReactGA.initialize('UA-254528798-1')
    ReactGA.pageview('window.location.pathname');
  })

  return (
    <div className="App">
      <HomePage />
      heowkddekoccfmrklrmlmlm
    </div>
  );
}

export default App;
