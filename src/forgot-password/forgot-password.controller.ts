import { ForgotPasswordService } from './forgot-password.service';
// forgot-password.controller.ts
import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';


@Controller('forgot-password')
export class ForgotPasswordController {
  constructor(private forgotPasswordService: ForgotPasswordService) {}


  @Get('resetpassword/:token')
  renderMyView(@Res() res, @Param() token) {
    res.render('forgot-password');
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
