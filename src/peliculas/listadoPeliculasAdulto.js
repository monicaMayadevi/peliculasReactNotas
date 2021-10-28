import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import VerPelicula from '../stores/VerPelicula'

class ListadoPeliculasAdulto extends React.Component
{
	renombrarPelicula()
	{
		this.props.peliculas.cambiarNombre("Video Monish",0)
	}
	render()
	{

		const { peliculas } = this.props
	/*	const peliculasAyA = peliculas.listado.filter( pelicula => pelicula.clasificacion != 'A' ) */
		return (
      <div>

				<h1>{ peliculas.titulo }</h1> <button type="button" onClick={ () => this.renombrarPelicula() }>Cambiar nombre</button>
				 <h2>Listado de peliculas</h2>

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
export default inject( 'peliculas' )( observer ( ListadoPeliculasAdulto ))
