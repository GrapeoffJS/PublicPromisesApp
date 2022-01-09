import { IsNotEmpty, IsString } from 'class-validator';

export class PublicPromiseDTO {
    @IsNotEmpty()
    @IsString()
    author: string;

    @IsNotEmpty()
    @IsString()
    text: string;
}
