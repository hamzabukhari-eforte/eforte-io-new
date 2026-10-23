import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';
import { Transform } from 'class-transformer';

function emptyToUndefined(value: unknown): unknown {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed.length === 0 ? undefined : trimmed;
}

export class CreateCareerDto {
  @Transform(({ value }) => emptyToUndefined(value))
  @IsString()
  @MinLength(1)
  firstName!: string;

  @Transform(({ value }) => emptyToUndefined(value))
  @IsString()
  @MinLength(1)
  lastName!: string;

  @Transform(({ value }) => emptyToUndefined(value))
  @IsEmail()
  email!: string;

  @Transform(({ value }) => emptyToUndefined(value))
  @IsOptional()
  @IsString()
  phone?: string;

  @Transform(({ value }) => emptyToUndefined(value))
  @IsOptional()
  @IsString()
  position?: string;

  @Transform(({ value }) => emptyToUndefined(value))
  @IsOptional()
  @IsString()
  message?: string;
}
