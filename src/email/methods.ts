import { MailerModule } from "@nestjs-modules/mailer";
import { join } from "path";
import {HandlebarsAdapter} from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter'

const transport = {
    
        host: process.env.sendgridHost,
        auth:{
            user: process.env.sendgridUser,
            pass: process.env.sendgridApiKey
        }
    
}

export const emailModule = MailerModule.forRoot({
    transport:transport,
    template: {
      dir: join(__dirname,'./templete'),
      adapter: new HandlebarsAdapter(),
    }
})

