System.register(["angular2/core", "../model/cliente", "../model/vehiculo"], function(exports_1, context_1) {
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
    var core_1, cliente_1, vehiculo_1;
    var CrearClienteComponent;
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
            }],
        execute: function() {
            CrearClienteComponent = (function () {
                function CrearClienteComponent() {
                    this.cliente = new cliente_1.Cliente("", "", "", "", null, "");
                    CrearClienteComponent.arrayClientes = [new cliente_1.Cliente("", "", "", "", null, "")];
                    this.vehiculo = new vehiculo_1.Vehiculo("", "", "");
                    CrearClienteComponent.arrayVehiculos = [new vehiculo_1.Vehiculo("", "", "")];
                }
                CrearClienteComponent.buscarCliente = function (id) {
                    var cliente = new cliente_1.Cliente("", "", "", "", null, "");
                    for (var i = 1; i < CrearClienteComponent.arrayClientes.length; i++) {
                        if (CrearClienteComponent.arrayClientes[i].idDocumento === id) {
                            cliente = CrearClienteComponent.arrayClientes[i];
                            alert("Se ha encontrado el cliente buscado");
                        }
                    }
                    return cliente;
                };
                CrearClienteComponent.buscarVehiculo = function (id) {
                    var vehiculo = new vehiculo_1.Vehiculo("", "", "");
                    for (var i = 1; i < CrearClienteComponent.arrayClientes.length; i++) {
                        if (CrearClienteComponent.arrayClientes[i].idDocumento === id) {
                            vehiculo = CrearClienteComponent.arrayVehiculos[i];
                        }
                    }
                    return vehiculo;
                };
                CrearClienteComponent.prototype.onSubmit = function () {
                    var nuevoCliente;
                    nuevoCliente = this.cliente;
                    CrearClienteComponent.arrayClientes.push(nuevoCliente);
                    this.cliente = new cliente_1.Cliente("", "", "", "", null, "");
                    alert("Cliente Guardado Satisfactoriamente");
                    var nuevoVehiculo;
                    nuevoVehiculo = this.vehiculo;
                    CrearClienteComponent.arrayVehiculos.push(nuevoVehiculo);
                    this.vehiculo = new vehiculo_1.Vehiculo("", "", "");
                    alert("Vehiculo guardado satisfactoriamente");
                };
                CrearClienteComponent = __decorate([
                    core_1.Component({
                        //selector: "formulario",
                        templateUrl: "app/view/formulario-list.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], CrearClienteComponent);
                return CrearClienteComponent;
            }());
            exports_1("CrearClienteComponent", CrearClienteComponent);
        }
    }
});
//# sourceMappingURL=guardarClientes.component.js.map