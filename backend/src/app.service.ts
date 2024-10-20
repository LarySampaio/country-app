import { Injectable } from '@nestjs/common'; 
import { HttpService } from '@nestjs/axios'; 
import { firstValueFrom } from 'rxjs'; 

@Injectable()
export class CountriesService {
  constructor(private readonly httpService: HttpService) {}

  async getAvailableCountries() {
    const url = 'https://date.nager.at/api/v3/AvailableCountries';
    const response = await firstValueFrom(this.httpService.get(url));
    return response.data; 
  }

  async getCountryInfo(countryCode: string) {
    console.log('Chamada para getCountryInfo com countryCode:', countryCode); 

    const countryUrl = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
    console.log('URL chamada:', countryUrl); 
    
    try {
      const infoResponse = await firstValueFrom(this.httpService.get(countryUrl));
      console.log('Resposta da API:', infoResponse.data);

      const flagApiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/images';
      const body = {
        iso2: infoResponse.data.countryCode,
      };

      
      const flagResponse = await firstValueFrom(
        this.httpService.post(flagApiUrl, body, { headers: { 'Content-Type': 'application/json' } })
      );
      
      const populationUrl = 'https://countriesnow.space/api/v0.1/countries/population';
      const populationBody ={
        country: infoResponse.data.commonName
      };

      const populationResponse = await firstValueFrom(
        this.httpService.post(populationUrl, populationBody, { headers: { 'Content-Type': 'application/json' } })
      );

      return {
        commonName: infoResponse.data.commonName,
        officialName: infoResponse.data.officialName,
        countryCode: infoResponse.data.countryCode,
        region: infoResponse.data.region,
        borders: infoResponse.data.borders,
        flagUrl: flagResponse.data.data.flag, 
        population: populationResponse.data.data.populationCounts, 
      };
    } catch (error) {
      console.error('Erro ao chamar a API:', error);
      throw error; 
    }
  }
}
