// forgot-password.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DB_CONNECTION_SERVICE } from 'src/db/DatabaseModule';
import  {hash} from 'bcrypt';
import { Db } from 'mongodb';


@Injectable()
export class ForgotPasswordService {
    jwtService: JwtService;
    constructor(@Inject (DB_CONNECTION_SERVICE) private db: Db,
     private jtService: JwtService){

        this.jtService = new JwtService ({
            secret: 'mohamed',
            signOptions: { expiresIn: '24h' }
        })
    }

  async resetPassword(password,cPassword,emailoken): Promise<string> {
     try {
        const email  = await this.jtService.verifyAsync(emailoken);
        console.log(email);
        if(password !== cPassword){
            return 'Passwords do not match';
          }else{
          let hashed = await hash(password, 10);
      await this.db.collection('users').updateOne({ email: email }, { $set: { password: hashed } });
      return 'Password has been changed';
      }
    } catch (error) {
        console.log(error);
    }
        
      
    
  }
  }
