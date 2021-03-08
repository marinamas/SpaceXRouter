
import './App.css';
import React from "react"
import Rockets from "./Components/Rockets"
import Launches from "./Components/Launches"
import Nav from "./Components/Nav"
import History from "./Components/History"
import ItemContainer from "./Components/ItemContainer"
import {BrowserRouter as Router , Route , Switch} from "react-router-dom"


function App() {
  return (
    <Router>
      <Nav /> 
      <Switch>
      <Route path = "/" exact component ={Rockets} />
      <Route path = "/launches"  component={Launches} />
      <Route path = "/history"  component = {History} />
      <Route path = "/rockets/:id"  component = {ItemContainer} />
      </Switch>
    </Router>
  );
}

export default App;
