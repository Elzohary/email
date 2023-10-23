import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ForgotPasswordController } from './forgot-password.controller';
import { ForgotPasswordService } from './forgot-password.service';
import { DatabaseModule } from 'src/db/DatabaseModule';

@Module({
  imports:[DatabaseModule],
  controllers: [ForgotPasswordController],
  providers: [ForgotPasswordService]
})
export class ForgotPasswordModule {}
