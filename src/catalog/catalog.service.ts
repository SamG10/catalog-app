import { Injectable } from '@nestjs/common';
import { CatalogRepository } from './catalog.repository';
import { CreateCatalogDto } from './dto/create-catalog.dto';

@Injectable()
export class CatalogService {
  constructor(private readonly catalogRepository: CatalogRepository) {}

  async getCatalog() {
    return this.catalogRepository.getCatalog();
  }

  async getCatalogById(id: string) {
    return this.catalogRepository.getCatalogById(id);
  }

  async createCatalog(createCatalogDto: CreateCatalogDto) {
    return this.catalogRepository.createCatalog(createCatalogDto);
  }
}
