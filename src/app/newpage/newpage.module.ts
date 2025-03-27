import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards/cards.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UsersComponent } from './users/users.component';
// import { TwitchComponent } from './twitch/twitch.component';



@NgModule({
  declarations: [
    // TwitchComponent
  
    CardsComponent,
    UsersComponent,
    
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  
})
export class NewpageModule { }
