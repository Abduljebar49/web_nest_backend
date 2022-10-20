import { Test, TestingModule } from '@nestjs/testing';
import { NeshidaController } from './neshida.controller';

describe('NeshidaController', () => {
  let controller: NeshidaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NeshidaController],
    }).compile();

    controller = module.get<NeshidaController>(NeshidaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
