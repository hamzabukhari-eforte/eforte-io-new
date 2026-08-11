import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class CreateQuoteDto {
  @IsString()
  @MinLength(1)
  businessName!: string;

  @IsString()
  @MinLength(1)
  firstName!: string;

  @IsString()
  @MinLength(1)
  lastName!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(1)
  countryCode!: string;

  @IsString()
  @MinLength(1)
  phone!: string;

  @IsOptional()
  @IsString()
  referralSource?: string;

  @IsString()
  @MinLength(1)
  lookingFor!: string;

  @IsString()
  @MinLength(1)
  projectType!: string;

  @IsString()
  @MinLength(1)
  budget!: string;

  @IsString()
  @MinLength(1)
  requirements!: string;
}
