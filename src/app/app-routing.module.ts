import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import { DirectoriesComponent } from './directories/directories.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'directories', component: DirectoriesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
