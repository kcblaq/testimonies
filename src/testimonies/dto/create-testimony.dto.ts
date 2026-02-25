import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';


export class CreateTestimonyDto {

    @ApiProperty({
        name: 'title',
        description: 'The title of the testimony',
        example: 'My Testimony',
    })
    title: string;
    @IsString({ message: 'Name must be a string' })
    @MaxLength(50, { message: 'Name must be at most 50 characters' })
    @MinLength(10, { message: 'Name must be at least 10 characters' })

    @ApiProperty({
        name: 'authorName',
        description: 'The name of the person giving the testimony',
        example: 'Kelechi Ugwu',
    })
    authorName: string;

    @ApiProperty({
        name: 'authorEmail',
        description: 'The email of the person giving the testimony',
        example: 'kelechi@example.com',
    })
    @IsEmail({}, { message: 'Invalid email format' })
    @IsString({ message: 'Email must be a string' })
    authorEmail: string;

    @ApiProperty({
        name: 'content',
        description: 'The content of the testimony',
        example: 'This is a testimony about how great this service is.',
    })
    content: string;

    @ApiProperty({
        description: 'The date of the testimony',
        example: '2024-06-01',
    })
    date: Date;
    
    @ApiProperty({
        name: 'status',
        description: 'Whether the testimony is approved by an admin',
        example: false,
    })
    status: boolean;


    @ApiProperty({
        name: 'updatedByEmail',
        description: 'The email of the person who updated the testimony',
        example: 'kelechi@example.com',
    })
    @IsEmail({}, { message: 'Invalid email format' })
    @IsString({ message: 'Email must be a string' })
    updatedByEmail: string;


}
