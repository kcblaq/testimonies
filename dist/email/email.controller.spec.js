import { Test } from '@nestjs/testing';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';
describe('EmailController', () => {
    let controller;
    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [EmailController],
            providers: [EmailService],
        }).compile();
        controller = module.get(EmailController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=email.controller.spec.js.map