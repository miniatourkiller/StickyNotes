import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionServiceService {

  constructor() { }

  public getSavedDetails() : any{
    console.log(sessionStorage.getItem('userDetails'));
    
    return JSON.parse(sessionStorage.getItem('userDetails') || '{}');
  }

  public setDetails(userDetails: any) : void{
    sessionStorage.setItem('userDetails', JSON.stringify(userDetails));
  }

  public getoken() : string | null{
    return JSON.parse(sessionStorage.getItem('userDetails') || '{}').token;
  }

  public clearDetails() : void{
    sessionStorage.clear();
  }
}
