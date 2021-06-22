import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NeovisComponent } from './neovis/neovis.component';
import { AboutComponent } from './about/about.component'; 
import { SelectComponent } from './select/select.component';

const routes: Routes = [
  { path: '', component: AboutComponent }, 
  { path: 'select', component: SelectComponent },
  { path: 'neovis', component: NeovisComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
