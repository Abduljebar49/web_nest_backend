import { Test, TestingModule } from '@nestjs/testing';
import { NeshidaService } from './neshida.service';

describe('NeshidaService', () => {
  let service: NeshidaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeshidaService],
    }).compile();

    service = module.get<NeshidaService>(NeshidaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
