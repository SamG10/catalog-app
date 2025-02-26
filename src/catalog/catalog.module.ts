import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogController } from './catalog.controller';
import { CatalogRepository } from './catalog.repository';
import { CatalogService } from './catalog.service';
import { Catalog } from './entities/catalog.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Catalog])],
  providers: [CatalogService, CatalogRepository],
  controllers: [CatalogController],
})
export class CatalogModule {}
