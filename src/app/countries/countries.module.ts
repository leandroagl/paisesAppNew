import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ByCapitalPageComponent } from './pages/by-capital/by-capital.component';
import { ByCountryPageComponent } from './pages/by-country/by-country.component';
import { ByRegionPageComponent } from './pages/by-region/by-region.component';
import { CountryPageComponent } from './pages/country-page/country-page.component';
import { CountriesRoutingModule } from './countries-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CountriesRoutingModule
  ],
  declarations: [
    ByCapitalPageComponent,
    ByCountryPageComponent,
    ByRegionPageComponent,
    CountryPageComponent
  ],

})
export class CountriesModule { }
