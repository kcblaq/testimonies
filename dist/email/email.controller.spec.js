"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const email_controller_1 = require("./email.controller");
const email_service_1 = require("./email.service");
describe('EmailController', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [email_controller_1.EmailController],
            providers: [email_service_1.EmailService],
        }).compile();
        controller = module.get(email_controller_1.EmailController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=email.controller.spec.js.map