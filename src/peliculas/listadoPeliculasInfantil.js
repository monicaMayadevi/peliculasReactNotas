import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import VerPelicula from '../stores/VerPelicula'

class ListadoPeliculasInfantil extends React.Component
{

	render()
	{
//const peliculasAyA = peliculas.filter( pelicula => pelicula.clasificacion != 'A' )
		const { peliculas } = this.props
		const peliculasAyA = peliculas.listado.filter( pelicula => pelicula.clasificacion == 'A' )
		return (
      <div>
			  <h1>Listado de peliculas</h1>
				<h2>{ peliculas.titulo }</h2>


				<div>

							 <ul>
		                { peliculasAyA.map(pelicula => (
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
export default inject( 'peliculas' )( observer ( ListadoPeliculasInfantil ))
