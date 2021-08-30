import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import Mitologia from '../Mitologia/Mitologia.jsx'
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
        <Header />
    <div>
        <main>
        <Switch>
          <Route exact path ="/">

            <Inicio/>

          </Route>
          <Route exact path="/arte">



          </Route>
          <Route exact path="/mitologia">

            <Mitologia/>

          </Route>
          <Route exact path="/realeza">



          </Route>
          <Route exact path="/monumentos">



          </Route>
          <Route exact path="/cadastro">



          </Route>
        
        </Switch>

        </main>
    </div>
  </div>
  );
}

export default App;
