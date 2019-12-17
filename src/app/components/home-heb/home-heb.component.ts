import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-heb',
    templateUrl: './home-heb.component.html',
    styleUrls: ['./home-heb.component.css']
})
export class HomeHebComponent implements OnInit {
    element;
    positionInfo;
    width: number;
    constructor() { }

    ngOnInit() {
        // this.getMenuWidth();
    }
    // public getMenuWidth(): void {
    //     this.element = document.getElementById('nav');
    //     this.positionInfo = this.element.getBoundingClientRect();
    //     this.width = this.positionInfo.width;
    // }
}
