import {Component} from "angular2/core";
import {Cliente} from "../model/cliente";
import {Vehiculo} from "../model/vehiculo";
import {CrearClienteComponent} from "./guardarClientes.component";

@Component({
	//selector: "formulario-editar",
	templateUrl: "app/view/editarCliente.html"
})

export class EditarClienteComponent{
	public idCliente:string="";
	public mostrarFormulario:boolean=false;
	


	public cliente:Cliente;
	public vehiculo:Vehiculo;

	constructor(){
		this.cliente=new Cliente("","","","",null,""); 
		this.vehiculo=new Vehiculo("","","");
	}

	onSubmit(){
		alert("Edición termianda");
		this.mostrarFormulario=false;
	}

	buscarClienteEditar(idCliente:string){
		for(var i = 1;i<CrearClienteComponent.arrayClientes.length;i++){
			if(CrearClienteComponent.arrayClientes[i].idDocumento === idCliente){
			 this.cliente=CrearClienteComponent.arrayClientes[i];
			 this.vehiculo=CrearClienteComponent.arrayVehiculos[i];
			 this.mostrarFormulario = true;
			}
		}
		this.idCliente = "";
	}
}