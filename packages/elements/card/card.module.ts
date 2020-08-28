import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleCardComponent } from './simple-card.component';
import { ColorizeDirective } from "@lib/elements/card/colorize.directive";


@NgModule({
  declarations: [SimpleCardComponent, ColorizeDirective],
  imports: [
    CommonModule,
  ],
  exports: [SimpleCardComponent, ColorizeDirective],
})
export class CardModule {
}
