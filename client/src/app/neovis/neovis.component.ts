import { Component, OnInit } from '@angular/core';
import NeoVis from 'neovis.js';

@Component({
  selector: 'app-neovis',
  templateUrl: './neovis.component.html',
  styleUrls: ['./neovis.component.css']
})

export class NeovisComponent implements OnInit {
  init = false;
  userId = localStorage.getItem('user_id')

  constructor() { 

  }

  ngOnInit(): void {
    this.init = true;
    // this.userId = this.checkString(this.userId); 
  }

  drawAll(): void {
    if (this.init) {
      var config = {
        container_id: 'DrinkDB',
        server_url: 'bolt://localhost:7687',
        server_user: 'neo4j',
        server_password: 'DrinkDB',
        labels: {
          "Drink": {
            "caption": "name",
            "size": "2",
            "color": "#FFA07A",
            "title_properties": [
              "name"
            ]
          },
          "Ingredient": {
            "caption": "name",
            "size": "1",
            "color": "#FFD700",
            "title_properties": [
              "name"
            ]
          },
          "Person": {
            "caption": "name",
            "size": "3",
            "color": "#FFB6C1",
            "title_properties": [
              "name"
            ]
          }
        },
        relationships: {
          "Likes": {
            "thickness": "2",
            "caption": true
          },
          "Dislikes": {
            "thickness": "2",
            "caption": true, 
          },
          "Contains": {
            "thickness": "1",
            "caption": "defaultCaption", 
            "color" : "#FFD700"
          }
        },
        initial_cypher: 'match (n)-[r]->(m) return n, r, m'
      }
      var viz = new NeoVis(config);

      viz.render();

      console.log(viz);
    }
  }

  drawRecByPerson(): void {

    if (this.init) {
      var config = {
        container_id: 'DrinkDB',
        server_url: 'bolt://localhost:7687',
        server_user: 'neo4j',
        server_password: 'DrinkDB',
        labels: {
          "Drink": {
            "caption": "name",
            "size": "2",
            "color": "#FFA07A",
            "title_properties": [
              "name"
            ]
          },
          "Ingredient": {
            "caption": "name",
            "size": "1",
            "color": "#FFD700",
            "title_properties": [
              "name"
            ]
          },
          "Person": {
            "caption": "name",
            "size": "3",
            "color": "#FFB6C1",
            "title_properties": [
              "name"
            ]
          }
        },
        relationships: {
          "Likes": {
            "thickness": "2",
            "caption": true
          },
          "Dislikes": {
            "thickness": "2",
            "caption": true, 
          },
          "Contains": {
            "thickness": "1",
            "caption": "defaultCaption", 
            "color" : "#FFD700"
          }
        },
        initial_cypher: 'match(p1:Person)-[r1:Likes]->(d1:Drink)<-[r2:Likes]-(p2:Person)-[r3:Likes]->(d2:Drink) ' + 
        'where ID(p1) = ' + this.userId + ' and not (p1)-[]->(d2) return p1, r1, d1, r2, p2, r3, d2'
      }
      var viz = new NeoVis(config);

      viz.render();

      console.log(viz);
    }
  }

  drawRecByIngredient(): void {
    // localStorage.setItem('user_id', data.user_id); 

    // let user_id = localStorage.getItem('user_id'); 
    if (this.init) {
      var config = {
        container_id: 'DrinkDB',
        server_url: 'bolt://localhost:7687',
        server_user: 'neo4j',
        server_password: 'DrinkDB',
        labels: {
          "Drink": {
            "caption": "name",
            "size": "2",
            "color": "#FFA07A",
            "title_properties": [
              "name"
            ]
          },
          "Ingredient": {
            "caption": "name",
            "size": "1",
            "color": "#FFD700",
            "title_properties": [
              "name"
            ]
          },
          "Person": {
            "caption": "name",
            "size": "3",
            "color": "#FFB6C1",
            "title_properties": [
              "name"
            ]
          }
        },
        relationships: {
          "Likes": {
            "thickness": "2",
            "caption": true
          },
          "Dislikes": {
            "thickness": "2",
            "caption": true, 
          },
          "Contains": {
            "thickness": "1",
            "caption": "defaultCaption", 
            "color" : "#FFD700"
          }
        },
        initial_cypher: 'match(p:Person)-[l:Likes]->(d1:Drink)-[c1:Contains]->(i:Ingredient)<-[c2:Contains]-(d2:Drink) '
         + 'where ID(p)=' + this.userId + ' and not (p)-[]->(d2) '
         + 'return p, l, d1, c1, i, c2, d2 '
      }
      var viz = new NeoVis(config);
      viz.render();

      console.log(viz);
    }
  }

  // checkString(qString:string|null):string {
  //   let returnString = ""
  //   if (qString) {
  //     qString = qString.replace(/[^a-zA-Z ]/g, "");
  //     qString = qString.trim(); 
  //     if (qString.length > 20) {
  //         qString = qString.substring(0, 20); 
  //     }
  //     returnString = qString; 
  //   } else {
  //     qString = localStorage.getItem('user_id')
  //     if (qString) {
  //       qString = qString.replace(/[^a-zA-Z ]/g, "");
  //       qString = qString.trim(); 
  //       if (qString.length > 20) {
  //           qString = qString.substring(0, 20); 
  //       }
  //       returnString = qString; 
  //     }
  //   }
  //   return returnString; 
  // }




}
