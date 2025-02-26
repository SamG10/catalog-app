import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { CreateCatalogDto } from './dto/create-catalog.dto';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get()
  getCatalog() {
    return this.catalogService.getCatalog();
  }

  @Get('/:id')
  async getCatalogById(@Param('id') id: string) {
    return this.catalogService.getCatalogById(id);
  }

  @Post('/')
  async createCatalog(@Body() createCatalogDto: CreateCatalogDto) {
    return this.catalogService.createCatalog(createCatalogDto);
  }
}
