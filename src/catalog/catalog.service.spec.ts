import { createMock } from '@golevelup/ts-jest';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatalogRepository } from './catalog.repository';
import { CatalogService } from './catalog.service';
import { CatalogType } from './enums/catalog-type.enum';

describe('CatalogService', () => {
  let service: CatalogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule],
      providers: [
        CatalogService,
        {
          provide: CatalogRepository,
          useValue: createMock<CatalogRepository>(),
        },
      ],
    }).compile();

    service = module.get<CatalogService>(CatalogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('catalogService', () => {
    it('should return catalog', async () => {
      const catalog = await service.getCatalog();
      expect(catalog).toBeDefined();
    });

    it('should return catalog by id', async () => {
      const catalog = await service.getCatalogById(
        '550e8400-e29b-41d4-a716-446655440001',
      );
      expect(catalog).toBeDefined();
    });

    it('should create catalog', async () => {
      const catalog = await service.createCatalog({
        title: 'Test 1',
        description: 'This is a description 1',
        year: 2025,
        type: CatalogType.Movie,
      });
      expect(catalog).toBeDefined();
    });
  });
});
