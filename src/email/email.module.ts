import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { emailModule } from './nodemailer-transport';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports:[
      JwtModule,
      emailModule,
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
      })
    ],
    controllers: [EmailController]
})
export class EmailModule {}
