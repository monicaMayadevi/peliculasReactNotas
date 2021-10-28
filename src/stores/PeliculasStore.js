 import { makeAutoObservable } from 'mobx'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  nombre = "Pesadilla en la calle del infierno"
   listado = [
		{ nombre: 'Viernes 13', genero: 'Terror', clasificacion: 'C' },
		{ nombre: 'Bambi', genero: 'Infantil', clasificacion: 'A' },
		{ nombre: 'XXX', genero: 'Accion', clasificacion: 'B' },
		]


	cambiarNombre( nombre,indice )
	{
		this.listado[0].nombre = nombre
    this.nombre = nombre
	}
}
