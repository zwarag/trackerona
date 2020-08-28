import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TrackerComponent } from './tracker.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [
    TrackerComponent,
  ],
    imports: [
        SharedModule,
        CommonModule,
    ],
  providers: [],
})

export class TrackerModule {
  constructor() {
  }
}
