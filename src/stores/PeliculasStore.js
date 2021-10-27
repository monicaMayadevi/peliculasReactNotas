 import { makeAutoObservable } from 'mobx'
export default class PeliculasStore
{
	constructor()
	{ makeAutoObservable(this) }
  nombre = "Pesadilla en la calle del infierno"
	cambiarNombre( nombre )
	{
		this.nombre = nombre
	}
}
