import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import React from "react";

import MenuPlanner from "./components/MenuPlanner";
import RecipeDetails from "./components/RecipeDetail";
import RecipeList from "./components/RecipeList";
import Navbar from "./components/Navbar";

import { Container } from "react-bootstrap";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="/MenuPlanner">
              <MenuPlanner />
            </Route>
            <Route path="/RecipeDetail">
              <RecipeDetails />
            </Route>
            <Route path="/RecipeList">
              <RecipeList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      <main></main>

      <footer footer="py-2 my-2 bg-white">
        <Container className="px-4">
          <p className="text-end text-black">Copyright &copy; Cibus 2023</p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
