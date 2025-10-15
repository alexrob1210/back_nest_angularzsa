import { PartialType } from "@nestjs/mapped-types";
import { LoginAuthDto } from "./login-auth.dto";
import { IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class RegisterAuthDto extends PartialType(LoginAuthDto){
    id?:number;
    @IsNotEmpty()
    name?:string;
    @IsNotEmpty()
    email:string;
    @IsNotEmpty()
    @MaxLength(20)
    @MinLength(6)
    password:string;
}