import { Component } from '@angular/core';
import { SessionServiceService } from '../../session-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {

  constructor(public sessionService: SessionServiceService, public router: Router) { }
  logout(){
    this.sessionService.clearDetails();
    window.location.href = "/";
  }

  home(){
    this.router.navigate(['/sticky']);
  }

  users(){
    this.router.navigate(['/users']);
  }

  userIsAdmin(){
    return this.sessionService.getRole() === "ADMIN";
  }
}
