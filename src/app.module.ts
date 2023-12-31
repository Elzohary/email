import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailModule } from './email/email.module';
import { ConfigModule } from '@nestjs/config';
import { ForgotPasswordModule } from './forgot-password/forgot-password.module';
@Module({
  imports: [
    EmailModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ForgotPasswordModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
