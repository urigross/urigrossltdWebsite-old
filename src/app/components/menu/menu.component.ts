import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public route: string = window.location.pathname;
  //   private route: string;
  // constructor(location: Location, private router: Router) {
  //   // Gets the current route.
  //     router.events.subscribe( val => {
  //         if (location.path() !== '') {
  //             this.route = location.path();
  //     } else {
  //         this.route = 'home';
  //     }
  //   });
  //  }

  ngOnInit() {
    // console.log(`current route is: ${window.location.pathname}`);

  }
// switches color according to routing
  private  toggleColorAboutRouting(): string {
      // return this.route === '/heb/about' ?  'white' :  'initial';
      return (window.location.pathname === '/heb/about' || window.location.pathname === '/heb/home') ?  'white' :  'initial';

  }
}

