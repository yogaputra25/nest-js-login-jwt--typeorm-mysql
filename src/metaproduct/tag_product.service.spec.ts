import { Test, TestingModule } from '@nestjs/testing';
import { TagProductService } from './tag_product.service';

describe('TagProductService', () => {
  let service: TagProductService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TagProductService],
    }).compile();

    service = module.get<TagProductService>(TagProductService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
