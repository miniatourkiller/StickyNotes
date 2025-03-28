import { Component } from '@angular/core';
import { SessionServiceService } from '../../session-service.service';
import { ConsumerService } from '../../consumer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isRegistering: boolean = false;
  dob: string = '';
  fullName: string = '';
  email: string = '';
  password: string = '';
  
  constructor(private sessionService: SessionServiceService,private consumer: ConsumerService, private router: Router) { }

  public onSubmit() {
    // Handle form submission here
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    var body = {
      email: this.email,
      password: this.password
    }
    this.consumer.post("/sticky/api/v1/all/user/login", body, null).subscribe((data: any) => {
      console.log(data);
      if(data.status == 200){
        this.sessionService.setDetails(data.data);
        window.location.href = "/sticky";
      }else{
        alert("Invalid Credentials");
      }
    }, (error) => {
      console.log(error.error);
    })
    
  }

  onRegister() {
    // Handle registration form submission here
    console.log('Full Name:', this.fullName);
    console.log('Date of Birth:', this.dob);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    var body = {
      fullName: this.fullName,
      dob: this.dob,
      email: this.email,
      password: this.password
    }
    this.consumer.post("/sticky/api/v1/all/user/register", body, null).subscribe((data: any) => {
      if(data.status == 200){
        this.sessionService.setDetails(data.data);
        this.email = '';
        this.password = '';
        this.isRegistering = false;
      }else{
        alert("Invalid Credentials");
      }
    }, (error) => {
      console.log(error);
    });
  }
}
