import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: ListUserComponent, data: { titulo: 'User', description: 'List of Users' } },
  { path: 'users/:id', component: UserComponent, data: { titulo: 'Detail User', description: 'Details of a User' } },
  { path: 'users/:id/edit', component: UserComponent, data: { titulo: 'Edit User', description: 'Edition of User' } },
  { path: 'users/new', component: UserComponent, data: { titulo: 'New User', description: 'New user' } },
  { path: '**', component: NopagefoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }