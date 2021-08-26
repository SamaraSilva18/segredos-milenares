import './App.css';
import React from 'react';

import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>

        <Header />

      <div className="titulo">
        <Titulo />

      </div>

      <main>
        <Switch>
          <Route exact path="/" render = {(props) => <Inicio/>}> </Route>
        </Switch>

      </main>

        <Footer />

    </div>

  );
}

export default App;
