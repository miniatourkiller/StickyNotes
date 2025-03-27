import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './newpage/login/login.component';
import { CardsComponent } from './newpage/cards/cards.component';
import { UsersComponent } from './newpage/users/users.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'sticky', component: CardsComponent},
  {path: 'users', component: UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
