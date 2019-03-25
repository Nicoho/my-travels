import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Travel from "./travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Travels</h1>
        </header>
        <Travel
          city  = "Dunkerque"
          country  = "France"
          distance = '3km'
          image='http://lvdneng.rosselcdn.net/sites/default/files/dpistyles_v2/ena_16_9_extra_big/2017/01/03/node_337738/39238586/public/2017/01/03/B9710699337Z.1_20170103154129_000%2BGIJ88SABV.2-0.jpg?itok=NdDnZQU0'
        />
        <Travel
          city  = "St Medard en Jalles"
          country  = "Médoc"
          distance = 'pas assez loin'
          image="https://images.sudouest.fr/2014/03/27/57ebb97f66a4bd67269f1835/widescreen/1000x500/la-voiture-devrait-etre-sortie-de-sa-facheuse-posture-dans-la-matinee.jpg"
        />
      </div>
    );
  }
}

export default App;
