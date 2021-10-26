import React from 'react'
import { Link } from 'react-router-dom'

class ListadoPeliculas extends React.Component
{
	render()
	{
		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<br/>
				<Link to="/">Home</Link>
		  </div>
		)
	}
}
export default ListadoPeliculas
