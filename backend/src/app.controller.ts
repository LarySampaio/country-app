import { Controller, Get, Param } from '@nestjs/common';
import { CountriesService } from './app.service';

@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  async getAvailableCountries() {
    return this.countriesService.getAvailableCountries();
  }

  @Get(':countryCode') 
  async getCountryInfo(@Param('countryCode') countryCode: string) {
    return this.countriesService.getCountryInfo(countryCode);
  }
}
