/*
 * react router @ Ming
 * index.js
 */
 
import React, { Component } from 'react'
import { HashRouter, BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from '../views/home'

const Routers = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
		</Switch>
	</Router>
)
export default Routers