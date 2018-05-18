import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { ResponseComponent } from './response/response.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';


const routes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'response', component: ResponseComponent },
  { path: 'history', component: HistoryComponent },
  
  {path: '' , component:HomeComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}