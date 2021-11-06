const SERVIDOR = 'https://monicamayadevi.github.io/peliculas'
const leerPeliculas = async() =>
{
	const url = `${ SERVIDOR }/pelicula.json`
  const response = await fetch(url)

	if( response.ok )
	  return response.json()
  else
	  throw Error( 'error al leer peliculas' )



}

export default { leerPeliculas }
