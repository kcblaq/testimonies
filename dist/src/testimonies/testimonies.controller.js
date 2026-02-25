"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimoniesController = void 0;
const common_1 = require("@nestjs/common");
const testimonies_service_1 = require("./testimonies.service");
const create_testimony_dto_1 = require("./dto/create-testimony.dto");
const update_testimony_dto_1 = require("./dto/update-testimony.dto");
let TestimoniesController = class TestimoniesController {
    testimoniesService;
    constructor(testimoniesService) {
        this.testimoniesService = testimoniesService;
    }
    create(createTestimonyDto) {
        return this.testimoniesService.create(createTestimonyDto);
    }
    findAll() {
        return this.testimoniesService.findAll();
    }
    findOne(id) {
        return this.testimoniesService.findOne(+id);
    }
    update(id, updateTestimonyDto) {
        return this.testimoniesService.update(+id, updateTestimonyDto);
    }
    remove(id) {
        return this.testimoniesService.remove(+id);
    }
};
exports.TestimoniesController = TestimoniesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_testimony_dto_1.CreateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_testimony_dto_1.UpdateTestimonyDto]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TestimoniesController.prototype, "remove", null);
exports.TestimoniesController = TestimoniesController = __decorate([
    (0, common_1.Controller)('testimonies'),
    __metadata("design:paramtypes", [testimonies_service_1.TestimoniesService])
], TestimoniesController);
//# sourceMappingURL=testimonies.controller.js.map