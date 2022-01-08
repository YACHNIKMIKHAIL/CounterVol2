import React from 'react';
import './App.css';
import CounterContainer from "./Components/CounterContainer";
import styled from "styled-components";

function App() {
    return (
        <AppCase className="App">
            <CounterContainer/>
        </AppCase>
    );
}

export default App;

const AppCase = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("https://c4.wallpaperflare.com/wallpaper/243/559/623/space-circles-graphics-planet-wallpaper-preview.jpg") center/cover;
`