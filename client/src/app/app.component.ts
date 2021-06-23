import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'client';
  count = 0;
  name = ''; 

  constructor(
    private route: ActivatedRoute, protected router : Router
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
    });
  }

  showAll() {
    console.log("showAllButtonClicked");
  }

  start() {
    this.router.navigate(['/']);
  }

  select() {
    this.router.navigate(['/select']);
  }

  show() {
    this.router.navigate(['/neovis']);
  }

}
