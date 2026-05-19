export declare class EmailService {
    private client;
    private sender;
    constructor();
    sendMail(to: string, template_uuid: string, template_variables: any): Promise<import("mailtrap").SendResponse>;
}
