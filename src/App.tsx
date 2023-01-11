import React from 'react';
import './App.css';
import {Header} from "./components/header/Header";
import alphaBetLogo from './assets/alpha_bet_logo.png';
import {MainPanel} from "./components/MainPanel/MainPanel";
import {Footer} from "./components/footer/Footer";
import {SearchPlayer} from "./components/search-player/SearchPlayer";

function App() {
    return (
    <div className="App">
        <Header/>
        <img src={alphaBetLogo} alt={""}/>
        <SearchPlayer/>
        <MainPanel/>
        <Footer/>
    </div>
  );
}

export default App;
