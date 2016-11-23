import {Component} from "angular2/core";
import {Cliente} from "../model/cliente";
import {Vehiculo} from "../model/vehiculo";
import {CrearClienteComponent} from "./guardarClientes.component";

@Component({
	selector: "formulario-busqueda",
	templateUrl: "app/view/buscarCliente.html"
})

export class BuscarClienteComponent{

	public idCliente:string;

	public mostrarDatos:boolean = false;

	public clienteAMostrar:Cliente;
	public vehiculoAMostrar:Vehiculo;

	constructor(){
		this.clienteAMostrar=new Cliente("","","","",null,"");
		this.vehiculoAMostrar=new Vehiculo("","","");

		this.idCliente = "";
	}

	onShowHide(value:boolean){
		this.mostrarDatos = value;//El mostrarDatos de esta clase
	}

	buscarCliente(idCliente:string){
		this.clienteAMostrar = CrearClienteComponent.buscarCliente(idCliente);
		this.vehiculoAMostrar = CrearClienteComponent.buscarVehiculo(idCliente);
		this.idCliente = "";
	}
}