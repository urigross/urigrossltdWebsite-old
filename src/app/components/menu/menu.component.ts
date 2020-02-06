import { Component } from '@angular/core';
import { ColorByRouteService } from 'src/app/services/color-by-route.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
// not working see remarks in colorbylocation service
export class MenuComponent {
    constructor(private colorByRouteService: ColorByRouteService) { }
    color = this.colorByRouteService.toggleColorAboutRouting();
}


