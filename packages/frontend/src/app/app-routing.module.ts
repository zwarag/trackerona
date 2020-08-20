import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
import {BundeslandComponent} from './view/bundesland/bundesland.component';
import {BezirkComponent} from './view/bezirk/bezirk.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bundesland', component: BundeslandComponent},
  {path: 'bezirk', component: BezirkComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
