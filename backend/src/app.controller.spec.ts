import { Test, TestingModule } from '@nestjs/testing';
import { CountriesController } from './app.controller';
import { CountriesService } from './app.service';

describe('AppController', () => {
  let appController: CountriesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [CountriesService],
    }).compile();

    appController = app.get<CountriesController>(CountriesController);
  });
});
