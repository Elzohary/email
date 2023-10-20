import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailTemplates } from './email-templates.enum';

@Controller('email')
export class EmailController {
    constructor(private maileService: MailerService){}

    @Post('welcome')
    async welcome(@Body()  payload){
        await this.maileService.sendMail({
            to: payload.toemail,
            from: process.env.senderEmail,
            subject: 'Welcome to Zuyu',
            template: EmailTemplates.WELCOME,
            context: {
                welcome: payload


            }
        });
    
        
        return 'mail sent'
    }

    @Post('resetpass')
    async resetPassword(@Body()  payload){
        await this.maileService.sendMail({
            to: payload.toemail,
            from: process.env.senderEmail,
            subject: 'Reset Password',
            template: EmailTemplates.PASSWORD_RESET,
            context: {
                forgotPassword: payload


            }
        });
    
        
        
        return 'mail sent'
    }
}

