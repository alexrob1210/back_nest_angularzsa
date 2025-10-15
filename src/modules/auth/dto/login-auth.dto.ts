import {IsEmail, IsNotEmpty, MaxLength, MinLength} from "class-validator";
import {user} from "../interfaces/user.interface";

export class LoginAuthDto implements user {
@IsEmail()
@IsNotEmpty()
email: string;
@MinLength(6)  
@MaxLength(255)
@IsNotEmpty()
  password: string;
}