// forgot-password.service.ts

import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DB_CONNECTION_SERVICE } from 'src/db/DatabaseModule';
import * as bcrypt from 'bcrypt';
import { Db } from 'mongodb';

@Injectable()
export class ForgotPasswordService {
  constructor(
    private jwtService: JwtService,
    @Inject(DB_CONNECTION_SERVICE) private db: Db,
  ) {}

  async resetPassword(
    password: string,
    cPassword: string,
    token: string,
  ): Promise<string> {
    try {
      const { email } = this.jwtService.verify(token);
      if (password !== cPassword) {
        return 'Passwords do not match';
      } else {
        const hashed = await bcrypt.hash(password, 10);
        await this.db
          .collection('users')
          .updateOne({ email: email }, { $set: { password: hashed } });
        return 'Password has been changed';
      }
    } catch (error) {
      console.log(error);
    }
  }

  generateResetToken(email: string): string {
    const payload = { email };
    const token = this.jwtService.sign(payload, { expiresIn: '30m' });
    return token;
  }
}
