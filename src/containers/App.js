import React, {Component} from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Panda from "../components/steps/Panda";
import Agame from "../components/steps/Agame";
import Spreeuw from "../components/steps/Spreeuw";
import Baviaan from "../components/steps/Baviaan";
import Oeps from "../components/steps/Oeps";

class App extends Component {
  render(){
    return (
      <main>
        <Switch>
          <Route path="/" exact strict component={Home} />
          <Route path="/about-me" component={About} />
          <Route path="/panda" component={Panda} />
          <Route path="/agame" component={Agame} />
          <Route path="/spreeuw" component={Spreeuw} />
          <Route path="/baviaan" component={Baviaan} />
          <Route path="/oeps" component={Oeps} />
        </Switch>
      </main>
    );
  }
}

export default withRouter(App);
