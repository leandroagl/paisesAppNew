import { NgModule } from '@angular/core';
import { ByCapitalComponent } from './components/by-capital/by-capital.component';
import { ByCountryComponent } from './components/by-country/by-country.component';
import { ByRegionComponent } from './components/by-region/by-region.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [],
  declarations: [
    ByCapitalComponent,
    ByCountryComponent,
    ByRegionComponent
  ],
  providers: [],
})
export class CountriesModule { }
