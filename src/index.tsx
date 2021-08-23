import React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import * as serviceWorker from './serviceWorker'
import './index.css'

const root = document.querySelector('#root')

render(<App />, root)

serviceWorker.unregister()
