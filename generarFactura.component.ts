import {Component} from "angular2/core";
import {Cliente} from "../model/cliente";
import {Vehiculo} from "../model/vehiculo";
import {CrearClienteComponent} from "./guardarClientes.component";

@Component({
	//selector: "formulario-eliminar",
	templateUrl: "app/view/generarFactura.html"
})

export class GenerarFacturaComponent{
	fecha:Date = new Date();
	idCliente:string = "";
	mostrarFactura:boolean = false;

	public cliente:Cliente;
	public vehiculo:Vehiculo;

	public concepto:string;
	public valor:number;

	constructor(){
		this.cliente=new Cliente("","","","",null,""); 
		this.vehiculo=new Vehiculo("","","");

		this.concepto = "Mensualidad";
		this.valor = 30000;
	}

	generarFecha():string{
		var fechaHoy:string ="";
		var año = this.fecha.getFullYear();
		var mes = this.fecha.getMonth();
		var dia = this.fecha.getDate();
		fechaHoy += dia+"/"+mes+"/"+año;
	    return fechaHoy;
	}

	generarFactura(idCliente:string){
		for(var i=1; i<CrearClienteComponent.arrayClientes.length; i++){
			if(CrearClienteComponent.arrayClientes[i].idDocumento === idCliente){
			 this.cliente=CrearClienteComponent.arrayClientes[i];
			 this.vehiculo=CrearClienteComponent.arrayVehiculos[i];
			 this.mostrarFactura = true;
			 if(this.vehiculo.tipoVehiculo === "Moto"){
			 	this.valor = 20000;
			 }
			}else{
				alert("No se ha encontrado el cliente");
			}	
		}
		this.idCliente = "";
	}

	onSubmit(){
		this.mostrarFactura = false;
	}



}