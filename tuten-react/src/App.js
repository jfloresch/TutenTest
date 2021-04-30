import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./styles.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Login from "./pages/Login";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
          <Route
            render={({ location }) => (
              <TransitionGroup className="container">
                <CSSTransition
                  appear={true}
                  key={location.key}
                  timeout={{ enter: 400, exit: 200 }}
                  classNames="fade"
                >
                  <div className="inner">
                    <Switch key={location.key} location={location}>

                      <Route exact path="/" component={Login} />
                      <Route path="/home" component={Home} />
                      <Route component={NotFound} />
                    </Switch>
                  </div>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
      </Router>
    );
  }
}

export default App;
