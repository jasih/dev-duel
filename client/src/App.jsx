import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";
import Home from "./screens/Home";
import Inspect from "./screens/Inspect";
import Duel from "./screens/Duel";

function App() {

 
 // Hook that runs after React has updated the DOM
  useEffect(() => {
    inspectUser()
  }, [])

  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/inspect" component={Inspect} />
        <Route exact path="/duel" component={Duel} />
      </Switch>
    </Router>
  );
}

export default App;
