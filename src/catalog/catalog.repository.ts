import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { CreateCatalogDto } from './dto/create-catalog.dto';
import { Catalog } from './entities/catalog.entity';

export class CatalogRepository {
  constructor(
    @InjectRepository(Catalog)
    private readonly catalogRepo: Repository<Catalog>,
  ) {}

  async getCatalog(): Promise<Catalog[]> {
    return this.catalogRepo.find();
  }

  async getCatalogById(id: string): Promise<Catalog | null> {
    return this.catalogRepo.findOne({ where: { id } });
  }

  async createCatalog(createCatalogDto: CreateCatalogDto): Promise<Catalog> {
    const catalog = this.catalogRepo.create({
      id: uuidv4(),
      ...createCatalogDto,
    });
    return this.catalogRepo.save(catalog);
  }
}
