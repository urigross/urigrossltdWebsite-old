import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

// not working. Reson: undefined route value. Maybe need async function use that
// way First Constructor/location then toggleColorAboutRouting().
// And maybe seperate to 2 services: one for location and another for coloring.
// Actions to take:
// 1. Take course in aysnc functions. 
// 2. Take debug course.
@Injectable({
    providedIn: 'root'
})
export class ColorByRouteService {

    private route: string;
    constructor(location: Location, private router: Router, private httpClient: HttpClient) {
        router.events.subscribe(val => {
            if (location.path() !== '') {
                this.route = location.path();
            } else {
                this.route = 'home';
                this.route = location.path();

            }
        });
    }
    // switches color according to routing
    public toggleColorAboutRouting(): string {
        console.log(this.route);
        return this.route === '/heb/about' ? 'white' : 'initial';
    }
}
