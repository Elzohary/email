import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { EmailController } from './email.controller';
import { emailModule } from './methods';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports:[
      emailModule,
      ConfigModule.forRoot({
        isGlobal: true,
        envFilePath: '.env',
      })
    ],
    controllers: [EmailController]
})
export class EmailModule {}
