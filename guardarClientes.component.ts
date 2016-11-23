import {Component} from "angular2/core";
import {Cliente} from "../model/cliente";
import {Vehiculo} from "../model/vehiculo";

@Component({
	//selector: "formulario",
	templateUrl: "app/view/formulario-list.html"
})

export class CrearClienteComponent{
	public cliente:Cliente;
	public static arrayClientes:Array<Cliente>;

	public vehiculo:Vehiculo;
	public static arrayVehiculos:Array<Vehiculo>;

	public static idCliente:string;

	constructor(){

		this.cliente=new Cliente("","","","",null,""); 
		CrearClienteComponent.arrayClientes=[new Cliente("","","","",null,"")];

		this.vehiculo=new Vehiculo("","","");
		CrearClienteComponent.arrayVehiculos=[new Vehiculo("","","")];
	}

	public static buscarCliente(id:string):Cliente{
		var cliente:Cliente=new Cliente("","","","",null,"");

		for(var i=1;i<CrearClienteComponent.arrayClientes.length; i++){
			if(CrearClienteComponent.arrayClientes[i].idDocumento === id){
				cliente=CrearClienteComponent.arrayClientes[i];
				alert("Se ha encontrado el cliente buscado");
			}
		}
		return cliente;
	}

	public static buscarVehiculo(id:string):Vehiculo{
		var vehiculo:Vehiculo=new Vehiculo("","","");

		for(var i=1;i<CrearClienteComponent.arrayClientes.length; i++){
			if(CrearClienteComponent.arrayClientes[i].idDocumento === id){
				vehiculo=CrearClienteComponent.arrayVehiculos[i];
			}
		}
		return vehiculo;
	}

 	onSubmit(){
 		var nuevoCliente:Cliente;
 		nuevoCliente = this.cliente;
 		CrearClienteComponent.arrayClientes.push(nuevoCliente);
 		this.cliente = new Cliente("","","","",null,"");
 		alert("Cliente Guardado Satisfactoriamente");

 		var nuevoVehiculo:Vehiculo;
 		nuevoVehiculo = this.vehiculo;
 		CrearClienteComponent.arrayVehiculos.push(nuevoVehiculo);
 		this.vehiculo =new Vehiculo ("","","");
 		alert("Vehiculo guardado satisfactoriamente")
 	}

}