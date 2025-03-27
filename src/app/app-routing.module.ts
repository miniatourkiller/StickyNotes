import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './newpage/login/login.component';
import { CardsComponent } from './newpage/cards/cards.component';
import { UsersComponent } from './newpage/users/users.component';
import { loginGuard } from './guards/login.guard';
import { logoutGuard } from './guards/logout.guard';

const routes: Routes = [
  {path: '', component: LoginComponent, canActivate: [logoutGuard]},
  {path: 'sticky', component: CardsComponent},
  {path: 'users', component: UsersComponent},
  {path: '**', redirectTo: '/sticky'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
