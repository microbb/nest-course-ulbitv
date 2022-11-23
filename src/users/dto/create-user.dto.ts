import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'qwerty212', description: 'Пароль' })
  readonly password: string;

  @ApiProperty({ example: 'test@mail.ru', description: 'Почтовый адрес' })
  readonly email: string;
}
