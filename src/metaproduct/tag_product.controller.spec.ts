import { Test, TestingModule } from '@nestjs/testing';
import { TagProductController } from './tag_product.controller';

describe('TagProductController', () => {
  let controller: TagProductController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TagProductController],
    }).compile();

    controller = module.get<TagProductController>(TagProductController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
