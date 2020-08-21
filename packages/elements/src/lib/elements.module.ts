import { NgModule } from '@angular/core';
import {CardModule} from './card/card.module';
import {TableModule} from './table/table.module';
import {SimplecardComponent} from './card/simplecard/simplecard.component';
import {SimpletableComponent} from './table/simpletable/simpletable.component';

@NgModule({
  declarations: [],
  imports: [
    CardModule,
    TableModule
  ],
  exports: [SimplecardComponent, SimpletableComponent]
})
export class ElementsModule { }
