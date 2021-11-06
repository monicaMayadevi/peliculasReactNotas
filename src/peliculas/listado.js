import { inject,observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'

class ListadoPeliculas extends React.Component
{
	constructor(props)
	{
		super(props)
		const { peliculas } = props
		if( ! peliculas.listadoCargado )
		  peliculas.cargarListado()
	}
	renombrarPelicula()
	{
		console.log("ejecutado");
		this.props.peliculas.cambiarNombre("El señor de los anillos",0)
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
				{
					peliculas.errorListado &&
					(
						<div class="alert alert-danger"
onClick={ () => peliculas.errorListado = false }
						>
						   Hubo un error al solicitar las peliculas.
							 Por favor mientasela a tu administrador de sistemas.
						</div>
					)
				}
				<div>
          <h3>Titulos</h3>
					<ul>
					{ peliculas.listado.map(pelicula => (
					 <li>Titulo: { pelicula.nombre }, Genero: { pelicula.genero }</li>
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
