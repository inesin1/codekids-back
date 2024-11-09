import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserEntity } from '../database/entities/user.entity';

type SignInReturnType = {
  success: boolean;
  access_token?: string;
};

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userRepository: UserRepository,
  ) {}

  async signIn(username: string, password: string): Promise<SignInReturnType> {
    const user = await this.userRepository.findOne({
      where: { username: username },
    });
    if (!user) return { success: false };

    const passwordValid = await this.validatePassword(password, user);

    if (!passwordValid) return { success: false };

    const { id, name, role } = user;
    const payload = {
      id,
      name,
      username,
      role,
    };
    return {
      success: true,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  private async validatePassword(pass: string, user: UserEntity) {
    // Для админа и дебага
    if (!user.password) {
      return true;
    }

    return await bcrypt.compare(pass, user.password.replace('$2y$', '$2a$'));
  }
}
