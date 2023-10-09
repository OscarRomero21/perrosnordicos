import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ConocemasComponent} from './components/conocemas/conocemas.component'
import { RazasComponent } from './components/razas/razas.component';

const routes: Routes = [

  {path: '',component:HomeComponent},
  {path: 'conocemas',component:ConocemasComponent},
  {path: 'razas' ,component:RazasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
