import { MailerService } from '@nestjs-modules/mailer';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { EmailTemplates } from './email-templates.enum';
import { JwtService } from '@nestjs/jwt';

@Controller('email')
export class EmailController {
    jwtService: JwtService;

    constructor(private maileService: MailerService, private JtService: JwtService) {
       this.JtService= new JwtService ({
            secret: 'mohamed',
            signOptions: { expiresIn: '24h' }
        })
    }
    
       
    
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
    async resetPassword(@Body()  payoad){
        let emailoken = await this.JtService.signAsync({toemail:payoad.toemail}, {expiresIn: '24h'}) 

        await this.maileService.sendMail({
            to: payoad.toemail,
            from: process.env.senderEmail,
            subject: 'Reset Password',
            template: EmailTemplates.PASSWORD_RESET,
            context: {
                forgotPassword: payoad,
                emailtoken: emailoken


            }
        });
        
        
        return 'mail sent'
    }
}

