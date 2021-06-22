import { Component, OnInit } from '@angular/core';
import  NeoVis  from 'neovis.js'; 

@Component({
  selector: 'app-neovis',
  templateUrl: './neovis.component.html',
  styleUrls: ['./neovis.component.css']
})


export class NeovisComponent implements OnInit {
  
  init = false; 
  constructor() { }
 
  ngOnInit(): void{ 
    this.init = true; 
  }

  draw(): void {

    if (this.init) {
    var config = {
      container_id: 'DrinkDB',
      server_url: 'bolt://localhost:7687',
      server_user: 'neo4j',
      server_password: 'DrinkDB',
      labels: {
        "Drink" : {
          "caption" : "name", 
          "size" : "pagerank", 
          "community" : "community", 
          "color" : "#006002",
          "title_properties" : [
            "name", 
            "pagerank"
          ]
        },
        "Ingredient" : {
          "caption" : "name", 
          "size" : "pagerank", 
          "community" : "community", 
          "title_properties" : [
            "name", 
            "pagerank"
          ]
        },
        "Person" : {
          "caption" : "name", 
          "size" : "pagerank", 
          "community" : "community", 
          "title_properties" : [
            "name", 
            "pagerank"
          ]
        }
      },


        
      initial_cypher: 'match (n) return n'
    }
    var viz = new NeoVis(config);

    viz.render();

    console.log(viz);

  }
  }
  
  


}
