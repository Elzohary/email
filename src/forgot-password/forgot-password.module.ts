import { Module } from '@nestjs/common';
import { ForgotPasswordController } from './forgot-password.controller';
import { ForgotPasswordService } from './forgot-password.service';
import { DatabaseModule } from 'src/db/DatabaseModule';
import { JwtModule, JwtService } from '@nestjs/jwt';

@Module({
  imports:[DatabaseModule,JwtModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService,JwtService]
})
export class ForgotPasswordModule {}
