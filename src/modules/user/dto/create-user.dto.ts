import { IsBoolean, IsOptional, IsString } from 'class-validator';
import { User } from 'src/types/user';

export class CreateUserDto implements Partial<User> {
  @IsString()
  name: string;

  @IsString()
  username: string;

  @IsString()
  password: string;

  @IsOptional()
  @IsBoolean()
  is_active: boolean;
}
