import "./App.css";

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
}

export default App;
