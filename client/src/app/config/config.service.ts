import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  uri = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  getAll():Observable<any> {
    return this.http.get(`${this.uri}/show-all`);
  }
}
