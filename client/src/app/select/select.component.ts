import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service'; 
import { Router } from '@angular/router';
import { Drink } from '../config/drink'; 
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'], 
  providers: [ConfigService]
})
export class SelectComponent implements OnInit {

  //drinkList:Drink[] = [];
  // public randomDrinks = [{drink_id : '123', drink_name : 'test drink', drink_image_url : 'drink_image_url.com'}];
  public randomDrinks : Drink[] = []; 
  public greatDrinks : Drink[] = []; 
  public grossDrinks : Drink[] = []; 
  //  Array<{drink_id: string, drink_name: string, 
  //   drink_image_url: string}> = [
      // {drink_id : '123', drink_name : 'test drink', drink_image_url : 'drink_image_url.com'}
  //   ]; 
  drinksLoaded = false; 

  constructor(private configService : ConfigService, 
    protected router : Router) { }

  ngOnInit(): void {
    this.configService.getRandom().subscribe(
      data => {
        console.log('drinks :' + data);
        if (data.drinks) {
          let drinks = data.drinks; 
          console.log(data.drinks)
          
          for (let i = 0; i < drinks.length; i++) {
            let currentDrink = drinks[i];
            let ingredients:string[] = []; 
            
            if (currentDrink.strIngredient1) {
              ingredients.push(currentDrink.strIngredient1.toLowerCase().trim()); 
            } 

            if (currentDrink.strIngredient2) {
              ingredients.push(currentDrink.strIngredient2.toLowerCase().trim()); 
            } 

            if (currentDrink.strIngredient3) {
              ingredients.push(currentDrink.strIngredient3.toLowerCase().trim()); 
            } 

            if (currentDrink.strIngredient4) {
              ingredients.push(currentDrink.strIngredient4.toLowerCase().trim()); 
            } 

            if (currentDrink.strIngredient5) {
              ingredients.push(currentDrink.strIngredient5.toLowerCase().trim()); 
            } 

            let parsedDrink = {
              drink_id : currentDrink.idDrink, 
              drink_name : currentDrink.strDrink, 
              drink_image_url : currentDrink.strDrinkThumb,
              drink_ingredients : ingredients
            }
            this.randomDrinks.push(parsedDrink)
          }
          // console.log('drinkList: ' + this.randomDrinks)
        }
        this.drinksLoaded = true; 
        // this.drinksLoaded = Promise.resolve(true);
      }
    )
  }

  // onDrop(event: CdkDragDrop<string[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data,
  //       event.previousIndex,
  //       event.currentIndex);
  //   } else {
  //     transferArrayItem(event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex, event.currentIndex);
  //   }
  // }

  drop(event: CdkDragDrop<Drink[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  submit() {
    // console.log("greatDrinks: " + this.greatDrinks); 
    // console.log("randomDrinks: " + this.randomDrinks);
    // console.log("grossDrinks: " + this.grossDrinks); 

    this.configService.saveSelection(this.greatDrinks, this.grossDrinks)
  }
}
