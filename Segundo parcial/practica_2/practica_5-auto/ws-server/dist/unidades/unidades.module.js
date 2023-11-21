"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnidadesModule = void 0;
const common_1 = require("@nestjs/common");
const unidades_service_1 = require("./unidades.service");
const unidades_controller_1 = require("./unidades.controller");
const dist_1 = require("@nestjs/typeorm/dist");
const unidade_entity_1 = require("./entities/unidade.entity");
const unidades_resolver_1 = require("./unidades.resolver");
let UnidadesModule = class UnidadesModule {
};
exports.UnidadesModule = UnidadesModule;
exports.UnidadesModule = UnidadesModule = __decorate([
    (0, common_1.Module)({
        controllers: [unidades_controller_1.UnidadesController],
        providers: [unidades_resolver_1.UnidadeResolver, unidades_service_1.UnidadesService],
        imports: [dist_1.TypeOrmModule.forFeature([unidade_entity_1.Unidade])],
        exports: [unidades_service_1.UnidadesService, dist_1.TypeOrmModule]
    })
], UnidadesModule);
//# sourceMappingURL=unidades.module.js.map