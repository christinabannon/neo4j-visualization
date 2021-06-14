import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { NeovisComponent } from './neovis/neovis.component';

const routes: Routes = [
  { path: 'show', component: ConfigComponent }, 
  { path: 'neovis', component: NeovisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
