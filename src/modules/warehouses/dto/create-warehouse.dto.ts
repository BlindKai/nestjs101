import {
  IsNumber,
  IsNumberString,
  IsPositive,
  IsString,
  Length,
} from 'class-validator';

export class CreateWarehouseDto {
  @Length(1, 25)
  @IsNumberString()
  number: string;

  @Length(1, 255)
  @IsString()
  address: string;

  @IsPositive()
  @IsNumber()
  maxDeliveryWeight: number;
}
