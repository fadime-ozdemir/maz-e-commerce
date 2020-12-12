import React from "react";
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from "./components/header";
import MainNavbar from "./components/mainNavbar";
import Footer from "./components/footer";
import ShirtPage from "./containers/shirtPage";
import ShirtsCategory from "./containers/shirtsCategory";

function App() {
  return (
    <Router className="App">
      <MainNavbar />
      <Switch>
          <Route path="/shirts">
            <ShirtsCategory />
          </Route>
          <Route path="/shirtA">
            <ShirtPage />
          </Route>
          <Route path="/">
            <Header />
          </Route>
        </Switch>
      <Footer />
    </Router>
  );
}

export default App;
