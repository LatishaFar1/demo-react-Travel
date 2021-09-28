import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Destinations from "./components/Destinations";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/Destinations">
            <Destinations />
          </Route>

          <Route exact path="/About">
            <About />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
