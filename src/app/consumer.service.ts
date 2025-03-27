import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionServiceService } from './session-service.service';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {
  baseUrl: string = 'http://161.97.69.205:4444';

  constructor(private http: HttpClient, private sessionService: SessionServiceService) { }

  public put(endpoint: string, data: any, token: string | null) : Observable<any>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.put(this.baseUrl+endpoint, data, {headers: headers});
  }

  public get(endpoint: string, token: string | null) : Observable<any>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.get(this.baseUrl+endpoint, {headers: headers});
  }

  public post(endpoint: string, data: any, token: string | null) : Observable<any>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.post(this.baseUrl+endpoint, data, {headers: headers});
  }

  public delete(endpoint: string, token: string | null) : Observable<any>{
    var headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+token
    });
    return this.http.delete(this.baseUrl+endpoint, {headers: headers});
  }

}
