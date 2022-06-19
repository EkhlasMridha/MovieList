import { isDate, MinLength, IsDateString } from "class-validator";

export class CreateMovie {
    id: any;

    @MinLength(3)
    name: string;

    @IsDateString()
    releaseDate: Date;
}
