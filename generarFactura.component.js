System.register(["angular2/core", "../model/cliente", "../model/vehiculo", "./guardarClientes.component"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, cliente_1, vehiculo_1, guardarClientes_component_1;
    var GenerarFacturaComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (cliente_1_1) {
                cliente_1 = cliente_1_1;
            },
            function (vehiculo_1_1) {
                vehiculo_1 = vehiculo_1_1;
            },
            function (guardarClientes_component_1_1) {
                guardarClientes_component_1 = guardarClientes_component_1_1;
            }],
        execute: function() {
            GenerarFacturaComponent = (function () {
                function GenerarFacturaComponent() {
                    this.fecha = new Date();
                    this.idCliente = "";
                    this.mostrarFactura = false;
                    this.cliente = new cliente_1.Cliente("", "", "", "", null, "");
                    this.vehiculo = new vehiculo_1.Vehiculo("", "", "");
                    this.concepto = "Mensualidad";
                    this.valor = 30000;
                }
                GenerarFacturaComponent.prototype.generarFecha = function () {
                    var fechaHoy = "";
                    var año = this.fecha.getFullYear();
                    var mes = this.fecha.getMonth();
                    var dia = this.fecha.getDate();
                    fechaHoy += dia + "/" + mes + "/" + año;
                    return fechaHoy;
                };
                GenerarFacturaComponent.prototype.generarFactura = function (idCliente) {
                    for (var i = 1; i < guardarClientes_component_1.CrearClienteComponent.arrayClientes.length; i++) {
                        if (guardarClientes_component_1.CrearClienteComponent.arrayClientes[i].idDocumento === idCliente) {
                            this.cliente = guardarClientes_component_1.CrearClienteComponent.arrayClientes[i];
                            this.vehiculo = guardarClientes_component_1.CrearClienteComponent.arrayVehiculos[i];
                            this.mostrarFactura = true;
                            if (this.vehiculo.tipoVehiculo === "Moto") {
                                this.valor = 20000;
                            }
                        }
                        else {
                            alert("No se ha encontrado el cliente");
                        }
                    }
                    this.idCliente = "";
                };
                GenerarFacturaComponent.prototype.onSubmit = function () {
                    this.mostrarFactura = false;
                };
                GenerarFacturaComponent = __decorate([
                    core_1.Component({
                        //selector: "formulario-eliminar",
                        templateUrl: "app/view/generarFactura.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], GenerarFacturaComponent);
                return GenerarFacturaComponent;
            }());
            exports_1("GenerarFacturaComponent", GenerarFacturaComponent);
        }
    }
});
//# sourceMappingURL=generarFactura.component.js.map