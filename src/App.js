import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
      </Router>
    </div>
  );
}

export default App;
