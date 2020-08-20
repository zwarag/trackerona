import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './view/home/home.component';
import {PageNotFoundComponent} from './view/page-not-found/page-not-found.component';
import {CardComponent} from './view/card/card.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'card', component: CardComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
