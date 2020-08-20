import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CardComponent } from './card/card.component';
import {ElementsModule} from '../elements/elements.module';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, CardComponent],
  imports: [
    CommonModule,
    ElementsModule
  ],
  exports: [HomeComponent]
})
export class ViewModule { }
