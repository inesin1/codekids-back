import { Injectable } from '@nestjs/common';
import { UserRepository } from '../database/repositories/user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { QueryOptions } from 'src/types/query-options';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import { ILike, Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}
  async create(createUserDto: CreateUserDto) {
    const { password } = createUserDto;
    const hashPassword = await bcrypt.hash(password, 10);
    const { password: newPass, ...user } = await this.userRepository.save({
      ...createUserDto,
      password: hashPassword,
    });

    return user;
  }

  async findAll(queryOptions: QueryOptions) {
    const limit = queryOptions.limit ?? 10;
    const page = queryOptions.page ?? 0;

    return this.userRepository.findAll({
      where: queryOptions.search
        ? [
            { name: ILike(`%${queryOptions.search}%`) },
            { username: ILike(`%${queryOptions.search}%`) },
          ]
        : undefined,
      relations: queryOptions.with,
      take: limit,
      skip: page * limit,
      order: {
        id: 'DESC',
      },
    });
  }

  async findOne(id: number, queryOptions: QueryOptions) {
    const { password, ...user } = await this.userRepository.findOne({
      where: { id },
      relations: queryOptions.with,
    });
    return user;
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const { password } = updateUserDto;
    if (password) {
      updateUserDto.password = await bcrypt.hash(password, 10);
    }

    const { password: userPass, ...user } = await this.userRepository.update(
      id,
      updateUserDto,
    );
    return user;
  }

  async remove(id: number) {
    return await this.userRepository.remove(id);
  }
}
