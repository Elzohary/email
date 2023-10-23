import { ForgotPasswordService } from './forgot-password.service';
// forgot-password.controller.ts
import { Body, Controller, Get, Param, Post, Render, Res } from '@nestjs/common';


@Controller('forgot-password')
export class ForgotPasswordController {

    constructor(private ForgotPasswordService: ForgotPasswordService) {}


  @Get('resetpassword/:token')
  renderMyView(@Res() res, @Param() token) {
    res.render('forgot-password');
  }


  @Post('resetpassword/:token')
  async reserPassword(@Body() password,cPassword, @Param() token ) {
   try {
    return await this.ForgotPasswordService.resetPassword(password,cPassword,token);
    
  } catch (error) {
    console.log(error);
    
  }
  
  }
}
