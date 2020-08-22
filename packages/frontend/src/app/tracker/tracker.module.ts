import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TrackerComponent } from './tracker.component';

@NgModule({
  declarations: [
    TrackerComponent,
  ],
  imports: [
    SharedModule,
  ],
  providers: [],
})
// @ts-ignore

export class TrackerModule {
  constructor() {
  }
}
