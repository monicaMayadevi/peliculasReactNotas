import React from 'react'
import { Link } from 'react-router-dom'


class Home extends React.Component
{
	render()
	{

		return (
      <div>
			  <h1>Página home</h1>
				<br/>
				<Link to="/peliculasAdulto">Catalogo de Peliculas Adulto</Link>
				<br />
				<Link to="/peliculasInfantil">Catalogo de Peliculas Infantil</Link>
		  </div>
		)
	}
}
export default Home
