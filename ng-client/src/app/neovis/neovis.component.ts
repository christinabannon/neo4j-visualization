import { Component, OnInit } from '@angular/core';
import  NeoVis  from 'neovis.js'; 

@Component({
  selector: 'app-neovis',
  templateUrl: './neovis.component.html',
  styleUrls: ['./neovis.component.css']
})
export class NeovisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const config = {
      container_id: 'BootsGram',
      server_url: 'bolt://localhost:7687',
      server_user: 'neo4j',
      server_password: 'BootsGram',
      initial_cypher: 'match (n) return n'
    }

  // ngAfterViewInit(): void {

  //   };
    
    const viz = new NeoVis(config);
    viz.render();
    console.log(viz);
  }
  


}
