import React from "react"
import HomePage from "./components/HomePage"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App m-auto sm:container sm:px-6 pt-2 sm:pt-5 w-screen">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
