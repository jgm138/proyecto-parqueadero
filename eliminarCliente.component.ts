import {Component} from "angular2/core";
import {Cliente} from "../model/cliente";
import {Vehiculo} from "../model/vehiculo";
import {CrearClienteComponent} from "./guardarClientes.component";

@Component({
	//selector: "formulario-eliminar",
	templateUrl: "app/view/eliminarCliente.html"
})

export class EliminarClienteComponent{

	public idCliente:string = "";

	public buscarClienteEliminar(id:string):boolean{
		var encontrado = false;
		for(var i = 1; i< CrearClienteComponent.arrayClientes.length; i++){
			if(CrearClienteComponent.arrayClientes[i].idDocumento === id){
				encontrado = true;
			}
		}
		return encontrado;
	}

	public eliminarCliente(encontrado:boolean,id:string){
		if(encontrado === true){
			for(var i = 1; i< CrearClienteComponent.arrayClientes.length; i++){
				if(CrearClienteComponent.arrayClientes[i].idDocumento === id){
					alert("Se ha eliminado el cliente");
					delete CrearClienteComponent.arrayClientes[i];
					delete CrearClienteComponent.arrayVehiculos[i];
				}
		  	}
		}else{
			alert("No se ha encontrado nada");
		}
		this.idCliente = "";
	}


}
