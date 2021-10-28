import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import VerPelicula from '../stores/VerPelicula'

class ListadoPeliculas extends React.Component
{
	renombrarPelicula()
	{
		this.props.peliculas.cambiarNombre("El señor de los anillos",0)
	}
	render()
	{

		const { peliculas } = this.props
	/*	const peliculasAyA = peliculas.listado.filter( pelicula => pelicula.clasificacion != 'A' ) */
		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<h2>{ peliculas.nombre }</h2>
				<button type="button" onClick={ () => this.renombrarPelicula() }>Cambiar nombre</button>
				<br/>

				<div>

							 <ul>
		                { peliculas.listado.map(pelicula => (
			                    <VerPelicula datos={ pelicula }/>
								 ))}
							</ul>
	    	</div>
           <br />
				<Link to="/">Home</Link>
		  </div>
		)
	}
}
export default inject( 'peliculas' )( observer ( ListadoPeliculas ))
