import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'

class ListadoPeliculas extends React.Component
{
	renombrarPelicula()
	{
		console.log("ejecutado");
		this.props.peliculas.cambiarNombre("Bambi")
	}
	render()
	{
		const { peliculas } = this.props
		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<h2>{ peliculas.nombre }</h2>
				<button type="button" onClick={ () => this.renombrarPelicula() }>Cambiar nombre</button>
				<br/>
				<Link to="/">Home</Link>
		  </div>
		)
	}
}
export default inject( 'peliculas' )( observer ( ListadoPeliculas ))
