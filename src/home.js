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
				<Link to="/peliculas">Catalogo de Peliculas</Link>
				<br />
		  </div>
		)
	}
}
export default Home
