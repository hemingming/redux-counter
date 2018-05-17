/*
 * app.js
 */

import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Routers from './router'
import reducer from './reducers'

const store = createStore(reducer)
const element = document.getElementById('app')

const App = () => (
	<Provider store={store}>
		<Routers />
	</Provider>
)

ReactDom.render(<App/>, element)