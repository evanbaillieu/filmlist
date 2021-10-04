import React from "react";
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import "./App.css"

import FilmList from "./view/filmList.js"


import Header from "./view/header";
import InfoFilmView from "./view/infoFilmView";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/list"]} component={FilmList} />
          <Route path={"/info_film/:id"} component={InfoFilmView} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
