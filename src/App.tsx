import React from "react"
import { HomePage } from "./components/HomePage"
import About from "./components/About"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import "./App.css"

export const App: React.FC = () => {
  return (
    <Router>
      <main className="App m-auto sm:container sm:px-5 md:px-4 pt-2 sm:pt-5 w-screen">
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </main>
    </Router>
  )
}
