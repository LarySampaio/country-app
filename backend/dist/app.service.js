"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountriesService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("@nestjs/axios");
const rxjs_1 = require("rxjs");
let CountriesService = class CountriesService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getAvailableCountries() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = 'https://date.nager.at/api/v3/AvailableCountries';
            const response = yield (0, rxjs_1.firstValueFrom)(this.httpService.get(url));
            return response.data;
        });
    }
    getCountryInfo(countryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log('Chamada para getCountryInfo com countryCode:', countryCode);
            const countryUrl = `https://date.nager.at/api/v3/CountryInfo/${countryCode}`;
            console.log('URL chamada:', countryUrl);
            try {
                const infoResponse = yield (0, rxjs_1.firstValueFrom)(this.httpService.get(countryUrl));
                console.log('Resposta da API:', infoResponse.data);
                const flagApiUrl = 'https://countriesnow.space/api/v0.1/countries/flag/images';
                const body = {
                    iso2: infoResponse.data.countryCode,
                };
                const flagResponse = yield (0, rxjs_1.firstValueFrom)(this.httpService.post(flagApiUrl, body, { headers: { 'Content-Type': 'application/json' } }));
                const populationUrl = 'https://countriesnow.space/api/v0.1/countries/population';
                const populationBody = {
                    country: infoResponse.data.commonName
                };
                const populationResponse = yield (0, rxjs_1.firstValueFrom)(this.httpService.post(populationUrl, populationBody, { headers: { 'Content-Type': 'application/json' } }));
                return {
                    commonName: infoResponse.data.commonName,
                    officialName: infoResponse.data.officialName,
                    countryCode: infoResponse.data.countryCode,
                    region: infoResponse.data.region,
                    borders: infoResponse.data.borders,
                    flagUrl: flagResponse.data.data.flag,
                    population: populationResponse.data.data.populationCounts,
                };
            }
            catch (error) {
                console.error('Erro ao chamar a API:', error);
                throw error;
            }
        });
    }
};
exports.CountriesService = CountriesService;
exports.CountriesService = CountriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [axios_1.HttpService])
], CountriesService);
