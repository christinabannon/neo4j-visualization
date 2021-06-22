import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config/config.service'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'], 
  providers: [ConfigService]
})
export class AboutComponent implements OnInit {

  constructor(private configService : ConfigService, protected router : Router) { 

  }

  ngOnInit(): void {
  }

  addNode() {
    this.configService.newNode().subscribe(
      data => {
        console.log(data);
        if (data.success) {
          localStorage.setItem('user_id', data.user_id); 
          console.log(localStorage.getItem('user_id'));
          this.router.navigate(['/select']);
        }
      }
    )
  }

}
