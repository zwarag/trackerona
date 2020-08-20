import { NgModule } from '@angular/core';
import {CardModule} from './card/card.module';
import {SimplecardComponent} from './card/simplecard/simplecard.component';



@NgModule({
  declarations: [],
  imports: [
    CardModule
  ],
  exports: [SimplecardComponent]
})
export class ElementsModule { }
