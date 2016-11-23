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
    var BuscarClienteComponent;
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
            BuscarClienteComponent = (function () {
                function BuscarClienteComponent() {
                    this.mostrarDatos = false;
                    this.clienteAMostrar = new cliente_1.Cliente("", "", "", "", null, "");
                    this.vehiculoAMostrar = new vehiculo_1.Vehiculo("", "", "");
                    this.idCliente = "";
                }
                BuscarClienteComponent.prototype.onShowHide = function (value) {
                    this.mostrarDatos = value; //El mostrarDatos de esta clase
                };
                BuscarClienteComponent.prototype.buscarCliente = function (idCliente) {
                    this.clienteAMostrar = guardarClientes_component_1.CrearClienteComponent.buscarCliente(idCliente);
                    this.vehiculoAMostrar = guardarClientes_component_1.CrearClienteComponent.buscarVehiculo(idCliente);
                    this.idCliente = "";
                };
                BuscarClienteComponent = __decorate([
                    core_1.Component({
                        selector: "formulario-busqueda",
                        templateUrl: "app/view/buscarCliente.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], BuscarClienteComponent);
                return BuscarClienteComponent;
            }());
            exports_1("BuscarClienteComponent", BuscarClienteComponent);
        }
    }
});
//# sourceMappingURL=buscarCliente.component.js.map