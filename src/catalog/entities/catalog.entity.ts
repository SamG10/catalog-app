import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CatalogType } from '../enums/catalog-type.enum';

@Entity()
export class Catalog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  year: number;

  @Column({
    type: 'text',
  })
  type: CatalogType;
}
