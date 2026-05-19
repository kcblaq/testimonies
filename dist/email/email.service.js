var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { MailtrapClient } from "mailtrap";
let EmailService = class EmailService {
    client;
    sender = {
        email: process.env.MAILTRAP_SENDER_EMAIL ?? '',
        name: process.env.MAILTRAP_SENDER_NAME ?? '',
    };
    constructor() {
        this.client = new MailtrapClient({
            token: process.env.MAILTRAP_API_TOKEN ?? '',
        });
    }
    async sendMail(to, template_uuid, template_variables) {
        try {
            return this.client.send({
                from: this.sender,
                to: [
                    { email: to }
                ],
                template_uuid: template_uuid,
                template_variables: template_variables
            });
        }
        catch (error) {
            console.log(error);
            throw new Error(`Failed to send email ${error}`);
        }
    }
};
EmailService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], EmailService);
export { EmailService };
//# sourceMappingURL=email.service.js.map