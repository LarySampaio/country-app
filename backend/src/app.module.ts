import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'; 
import { CountriesService } from './app.service'; 
import { CountriesController } from './app.controller'; 

@Module({
  imports: [HttpModule], 
  providers: [CountriesService], 
  controllers: [CountriesController], 
})
export class AppModule {}
