import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpletableComponent } from './simpletable/simpletable.component';



@NgModule({
  declarations: [SimpletableComponent],
  imports: [
    CommonModule
  ],
  exports: [SimpletableComponent]
})
export class TableModule { }
