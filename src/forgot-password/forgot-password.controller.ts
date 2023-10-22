import { ForgotPasswordService } from './forgot-password.service';
// forgot-password.controller.ts
import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';

@Controller('forgot-password')
export class ForgotPasswordController {
  constructor(private forgotPasswordService: ForgotPasswordService) {}

  @Get()
  @Render('forgot-password') // Render the HTML page
  showForgotPasswordPage() {
    return { title: 'Forgot Password' };
  }

  @Post('reset-password')
  async resetPassword(
    @Body('password') password: string,
    @Body('cPassword') cPassword: string,
    @Param('token') token: string,
  ) {
    try {
      const result = await this.forgotPasswordService.resetPassword(
        password,
        cPassword,
        token,
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
