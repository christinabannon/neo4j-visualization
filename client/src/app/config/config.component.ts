import { Component, OnInit } from '@angular/core';
import { ConfigService } from './config.service';
import  NeoVis  from 'neovis.js'; 

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {


  constructor( private configService: ConfigService, private neovis: NeoVis) { }

  ngOnInit(): void {
    console.log('initted config')
  }

  myFunc(): void{
    console.log('calling config service')
    this.configService.getAll()
      .subscribe(returnedThing => console.log(returnedThing));
    console.log('done calling confid service')
  }

  draw() {
    // var viz; 
    //   var config = {
    //       container_id: "viz",
    //       server_url: "bolt://localhost:7687",
    //       server_user: "neo4j",
    //       server_password: "sorts-swims-burglaries",
    //       labels: {
    //           "Character": {
    //               "caption": "name",
    //               "size": "pagerank",
    //               "community": "community"
    //           }
    //       },
    //       relationships: {
    //           "INTERACTS": {
    //               "thickness": "weight",
    //               "caption": false
    //           }
    //       },
    //       initial_cypher: "MATCH (n)-[r:INTERACTS]->(m) RETURN *"
    //   };

    //   viz = new NeoVis(config);
    //   viz.render();
  }
}
