import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';


const routes: Routes = [
  { path: 'home', component: ListUserComponent, data: { titulo: "Home", description: 'Mean page' } },
  { path: '', component: ListUserComponent, data: { titulo: "Home", description: 'Mean page' } }
  //{ path: 'new', component: , data: { titulo: 'Dashboad', descripcion: 'Página principal' } },
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
