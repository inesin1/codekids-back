import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async signIn(username: string, password: string) {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    if (!user)
      throw new HttpException(
        'Пользователь не найден в системе',
        HttpStatus.UNAUTHORIZED,
      );
    await this.validatePassword(password, user);

    const { id, name } = user;
    const payload = {
      id,
      name,
      username,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async validatePassword(pass: string, user: any) {
    if (!user.password) {
      return;
    }

    const passed = await bcrypt.compare(
      pass,
      user.password.replace('$2y$', '$2a$'),
    );
    if (!passed) {
      throw new HttpException('Неправильный пароль', HttpStatus.UNAUTHORIZED);
    }
  }
}
