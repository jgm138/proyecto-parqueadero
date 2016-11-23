System.register(["angular2/core", "./guardarClientes.component"], function(exports_1, context_1) {
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
    var core_1, guardarClientes_component_1;
    var EliminarClienteComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (guardarClientes_component_1_1) {
                guardarClientes_component_1 = guardarClientes_component_1_1;
            }],
        execute: function() {
            EliminarClienteComponent = (function () {
                function EliminarClienteComponent() {
                    this.idCliente = "";
                }
                EliminarClienteComponent.prototype.buscarClienteEliminar = function (id) {
                    var encontrado = false;
                    for (var i = 1; i < guardarClientes_component_1.CrearClienteComponent.arrayClientes.length; i++) {
                        if (guardarClientes_component_1.CrearClienteComponent.arrayClientes[i].idDocumento === id) {
                            encontrado = true;
                        }
                    }
                    return encontrado;
                };
                EliminarClienteComponent.prototype.eliminarCliente = function (encontrado, id) {
                    if (encontrado === true) {
                        for (var i = 1; i < guardarClientes_component_1.CrearClienteComponent.arrayClientes.length; i++) {
                            if (guardarClientes_component_1.CrearClienteComponent.arrayClientes[i].idDocumento === id) {
                                alert("Se ha eliminado el cliente");
                                delete guardarClientes_component_1.CrearClienteComponent.arrayClientes[i];
                                delete guardarClientes_component_1.CrearClienteComponent.arrayVehiculos[i];
                            }
                        }
                    }
                    else {
                        alert("No se ha encontrado nada");
                    }
                    this.idCliente = "";
                };
                EliminarClienteComponent = __decorate([
                    core_1.Component({
                        //selector: "formulario-eliminar",
                        templateUrl: "app/view/eliminarCliente.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], EliminarClienteComponent);
                return EliminarClienteComponent;
            }());
            exports_1("EliminarClienteComponent", EliminarClienteComponent);
        }
    }
});
//# sourceMappingURL=eliminarCliente.component.js.map