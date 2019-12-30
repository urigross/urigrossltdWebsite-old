import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    private route: string;
  constructor(location: Location, private router: Router) {
      router.events.subscribe( val => {
          if (location.path() !== '') {
              this.route = location.path();
              console.log(this.route);

      } else {
          this.route = 'home';
          console.log(this.route);

      }
    });
   }

  ngOnInit() {

  }

  private  getbackgroundColor(): string {
      return this.route === '/heb/about' ?  'black' :  '';
  }
}

