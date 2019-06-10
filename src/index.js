import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import { createStore, applyMiddleware, compose } from "redux"
// Provider 负责数据处理的(容器)
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { reducer } from "./redux/redux"

const devToolsExtension = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    devToolsExtension
  )
)

ReactDOM.render( 
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)