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

  clientUri = 'localhost:4200';
  serverUri = 'http://localhost:3000';

  constructor(private http:HttpClient) { }

  public getClientUri():string {
    return this.clientUri; 
  }

  public getAll():Observable<any> {
    return this.http.get(`${this.serverUri}/show-all`);
  }

  public newNode(name:string) : Observable<any>{
    let drinkData = {
      userName: name
    }
    return this.http.post<any>(this.serverUri + "/new-node", drinkData);
      // .subscribe(async data => {
      //   console.log(data)
      //   localStorage.setItem("user_id", data.user_id);
      // })
  }

  public getRandom(): Observable<any> {
    return this.http.get<any>('https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php')
  }

  public saveSelection(greatDrinks : Drink[], grossDrinks : Drink []) {
    // return this.http.post()
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

  // public newNode():Number {
  //   // TODO encryption
  //   let number = -1; 
  //   this.http.get(this.uri + "/new-node")
  //     .subscribe(async data => {
  //       let jsonString = JSON.stringify(data); 
  //       let jsonData = JSON.parse(jsonString);
  //       console.log(jsonData.user_id)
  //       number = jsonData.user_id; 
  //       return number; 
  //     })
    
    // return this.http.get(this.uri + "/new-node")

    //return this.http.get(this.uri + "/new-node").map((response: Response) => response.text());
    // this.http.get(this.uri + "/new-node").pipe(map(data => {})).subscribe(result => {
    //   console.log(result);
    // });
  //}

  // public newNode(): Observable<HttpResponse<any>> {
  //   return this.http.get<any>(this.uri + '/new-node')
  //   .pipe(map(response => {
  //       return {
  //         body: response.body, 
  //         headers: response.headers
  //       } as HttpResponse<any>;
  //     }
  //   ))
  // }\

  // public newNode(): {
  //   this.http.get(this.uri + '/new-node')
  // }
}
