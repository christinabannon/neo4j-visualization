import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { Drink } from '../config/drink'; 

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  //clientUri = 'localhost:4200';
  // serverUri = 'https://18.219.16.48:80';
  serverUri = 'http://localhost:3000'

  constructor(private http:HttpClient) { }
  
  public getAll():Observable<any> {
    return this.http.get(`${this.serverUri}/show-all`);
  }

  public newNode(name:string) : Observable<any>{
    let drinkData = {
      userName: name
    }
    return this.http.post<any>(this.serverUri + "/new-node", drinkData);
  }

  public getRandom(): Observable<any> {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
  }

  public saveSelection(greatDrinks : Drink[], grossDrinks : Drink []) {
    console.log('great drinks: ' + JSON.stringify(greatDrinks))
    console.log('gross drinks: ' + JSON.stringify(grossDrinks))
    let personId = localStorage.getItem('user_id'); 
    let drinkData = {
      userId : personId, 
      greatDrinks: greatDrinks, 
      grossDrinks: grossDrinks
    }
    return this.http.post<any>(this.serverUri + '/save-selection', drinkData)
  }
}
