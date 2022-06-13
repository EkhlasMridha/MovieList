import { Injectable } from "@nestjs/common";
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { UserService } from "src/services/user.service";

@ValidatorConstraint({ name: "IsEmailExists", async: true })
@Injectable()
export class EmailExistsValidator implements ValidatorConstraintInterface {
    constructor(private userService: UserService) {

    }
    async validate(value: string, validationArguments?: ValidationArguments): Promise<boolean> {
        var user = await this.userService.findOne({ email: value });

        if (user !== null) {
            return false;
        }
        return true;
    }
    defaultMessage?(validationArguments?: ValidationArguments): string {
        return "Already an user exists with this email";
        ;
    }

}