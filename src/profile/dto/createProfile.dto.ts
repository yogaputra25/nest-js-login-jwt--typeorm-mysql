import {
  IsNotEmpty,
  IsString,
  MinLength,
  isEmail,
  isString,
} from 'class-validator';

export class CreateDto {
  hobby: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  gender: string;

  addres: string;
  contact: string;
}
