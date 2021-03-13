import React from "react"
import { render } from "react-dom"
import "./assets/main.css"
import { App } from "./App"
import * as serviceWorker from "./serviceWorker"

const root = document.querySelector("#root")

render(<App />, root)

serviceWorker.unregister()
