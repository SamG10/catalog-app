import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { CatalogType } from '../enums/catalog-type.enum';

export class CreateCatalogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  year: number;

  @IsEnum(CatalogType)
  type: CatalogType;
}
