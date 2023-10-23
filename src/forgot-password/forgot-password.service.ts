// forgot-password.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DB_CONNECTION_SERVICE } from 'src/db/DatabaseModule';
import  {hash} from 'bcrypt';
import { Db } from 'mongodb';

@Injectable()
export class ForgotPasswordService {
    jwtService: JwtService;
    constructor(@Inject (DB_CONNECTION_SERVICE) private db: Db){}

  async resetPassword(password,cPassword,token): Promise<string> {
    let { email } = this.jwtService.verify(token)
    if(password !== cPassword){
        return 'Passwords do not match';
    }else{
        let hashed = await hash(password, 10);
    await this.db.collection('users').updateOne({ email: email }, { $set: { password: hashed } });
    return 'Password has been changed';
    }
    
  }
}
