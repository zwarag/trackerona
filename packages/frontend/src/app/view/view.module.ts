import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BundeslandComponent } from './bundesland/bundesland.component';
import { BezirkComponent } from './bezirk/bezirk.component';
import {ElementsModule} from '../../../../elements/src/lib/elements.module';
import {ComponentsModule} from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, PageNotFoundComponent, BundeslandComponent, BezirkComponent],
  imports: [
    CommonModule,
    ElementsModule,
    ComponentsModule
  ],
  exports: [HomeComponent]
})
export class ViewModule { }
