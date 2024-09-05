import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import Success from "./components/Success";
import "./App.css";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/success" component={Success} />
      </Switch>
</>
  );
}

export default App;
