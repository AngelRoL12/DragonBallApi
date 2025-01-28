import { Test, TestingModule } from '@nestjs/testing';
import { PersonajesController } from './personajes.controller';

describe('PersonajesController', () => {
  let controller: PersonajesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonajesController],
    }).compile();

    controller = module.get<PersonajesController>(PersonajesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
