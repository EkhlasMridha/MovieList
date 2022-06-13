import { IsEmail, Matches, Validate, MinLength } from "class-validator";
import { EmailExistsValidator } from "src/validators/email-exists.validator";

export class UserCreateDto {
    @MinLength(2)
    public firstName: string;

    @MinLength(2)
    public lastName: string;

    @IsEmail()
    @Validate(EmailExistsValidator)
    public email: string;

    @Matches("^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,12}$")
    public password: string;
}