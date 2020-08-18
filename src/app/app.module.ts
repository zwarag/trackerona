import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooModule } from 'foo';
import { BarModule } from 'bar';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        FooModule,
        BarModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
