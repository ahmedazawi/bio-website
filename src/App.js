import "./assets/css/App.css";
import AboutMe from "./views/AboutMe";
import Resume from "./views/Resume";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter basename="/bio-website">
        <Sidebar />
        <div className="side-line">
          <Switch>
            <Route exact path="/" component={AboutMe} />
            <Route path="/resume" component={Resume} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
