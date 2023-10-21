import { ForgotPasswordService } from './forgot-password.service';
// forgot-password.controller.ts
import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';


@Controller('forgot-password')
export class ForgotPasswordController {

    constructor(private ForgotPasswordService: ForgotPasswordService) {}

  @Get()
  @Render('forgot-password') // Render the HTML page
  showForgotPasswordPage() {
    return { title: 'Forgot Password' };
  }

  @Post('resetpasswprd')
  async reserPassword(
    @Body() password,cPassword,
    @Param() token
  ) {
   try {
    return await this.ForgotPasswordService.resetPassword(password,cPassword,token);
   } catch (error) {
    console.log(error);
    
   }
  }
}
