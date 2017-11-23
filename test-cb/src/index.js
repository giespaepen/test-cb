import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './modules/App'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import app from './reducers'
import registerServiceWorker from './registerServiceWorker'
import promiseMiddleware from 'redux-promise-middleware'
import logger from 'redux-logger'

let store = createStore(
  app,
  applyMiddleware(promiseMiddleware(), logger)
)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
registerServiceWorker()
