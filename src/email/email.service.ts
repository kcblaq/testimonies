import { Injectable } from '@nestjs/common';
import { MailtrapClient } from "mailtrap";

@Injectable()
export class EmailService {
    private client: MailtrapClient;
    private sender = {
     email: process.env.MAILTRAP_SENDER_EMAIL ?? '',
     name: process.env.MAILTRAP_SENDER_NAME ?? '',
    }
    constructor(){
        this.client = new MailtrapClient({
            token: process.env.MAILTRAP_API_TOKEN ?? '',
        })
    }

    async sendMail(
        to: string,
        template_uuid: string,
        template_variables: any
        
    ){
        try {
          return this.client.send({
            from: this.sender,
            to: [
                {email: to }  
            ],
            template_uuid: template_uuid,
            template_variables: template_variables
          })  
        } catch (error) {
          console.log(error)
           throw new Error(`Failed to send email ${error}`) 
        }
    }
}
