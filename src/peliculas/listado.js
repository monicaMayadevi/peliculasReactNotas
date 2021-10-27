import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'

class ListadoPeliculas extends React.Component
{
	render()
	{
		const { peliculas } = this.props
		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<h2>{ peliculas.nombre }</h2>
				<br/>
				<Link to="/">Home</Link>
		  </div>
		)
	}
}
export default inject( 'peliculas' )( observer ( ListadoPeliculas ))
