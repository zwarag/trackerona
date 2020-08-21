import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from '../app-routing.module';
import { FederalStatesTableComponent } from './federal-states-table/federal-states-table.component';
import {ElementsModule} from '../../../../elements/src/lib/elements.module';
import { FederalDistrictsTableComponent } from './federal-districts-table/federal-districts-table.component';

@NgModule({
  declarations: [NavbarComponent, FederalStatesTableComponent, FederalDistrictsTableComponent],
  exports: [
    NavbarComponent,
    FederalStatesTableComponent,
    FederalDistrictsTableComponent
  ],
  imports: [
    CommonModule,
    ElementsModule,
    AppRoutingModule
  ]
})
export class ComponentsModule { }
