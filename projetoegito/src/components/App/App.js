import './App.css';
import React from 'react';
import Header from '../Header/Header.jsx';
import Inicio from '../Inicio/Inicio.jsx';
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="body">

        <Header />

        <main>
        <Switch>
          <Route exact path ="/">

            <Inicio/>

          </Route>
        
        </Switch>

        </main>

    </div>

  );
}

export default App;
