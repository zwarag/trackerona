import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimplecardComponent } from './simplecard/simplecard.component';



@NgModule({
  declarations: [SimplecardComponent],
  imports: [
    CommonModule
  ],
  exports: [SimplecardComponent]
})
export class CardModule { }
