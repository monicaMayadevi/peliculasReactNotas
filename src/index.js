import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './home'
import ListadoPeliculas from './peliculas/listado'
import Footer from './footer'
/* comentario: console.log('hola')*/
ReactDOM.render
(
	<HashRouter>
	  <div className="container-fluid">
	    <Switch>
	        <Route exact path="/" component={ Home }/>
	        <Route exact path="/peliculas" component={ ListadoPeliculas }/>
	    </Switch>
	    <Footer/>
	  </div>
	</HashRouter>
	,
	document.getElementById('base')
)
