import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListUserComponent } from './components/list-user/list-user.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: ListUserComponent, data: { type: 'list', title: 'User', description: 'List of Users' } },
  { path: 'users/new', component: UserComponent, data: { type: 'new', title: 'New User', description: 'Create a new user' } },
  { path: 'users/:id', component: UserDetailComponent, data: { type: 'view', title: 'Detail User', description: 'Details of a User' } },
  { path: 'users/:id/edit', component: UserComponent, data: { type: 'edit', title: 'Edit User', description: 'Edition of a User' } },
  { path: '**', component: NopagefoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
