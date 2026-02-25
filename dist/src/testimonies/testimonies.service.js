"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestimoniesService = void 0;
const common_1 = require("@nestjs/common");
let TestimoniesService = class TestimoniesService {
    create(createTestimonyDto) {
        return 'This action adds a new testimony';
    }
    findAll() {
        return `This action returns all testimonies`;
    }
    findOne(id) {
        return `This action returns a #${id} testimony`;
    }
    update(id, updateTestimonyDto) {
        return `This action updates a #${id} testimony`;
    }
    remove(id) {
        return `This action removes a #${id} testimony`;
    }
};
exports.TestimoniesService = TestimoniesService;
exports.TestimoniesService = TestimoniesService = __decorate([
    (0, common_1.Injectable)()
], TestimoniesService);
//# sourceMappingURL=testimonies.service.js.map