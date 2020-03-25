import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-plywood-side-navbar',
  templateUrl: './plywood-side-navbar.component.html',
  styleUrls: ['./plywood-side-navbar.component.css']
})
export class PlywoodSideNavbarComponent implements OnInit {
  @Output() stringOutput = new EventEmitter<string>();

  sendChoiceToParent(value: string) {
    this.stringOutput.emit(value);
  }
  clearTwinBtnFontweight() {
    let element: HTMLElement = document.getElementsByClassName('twin-btn')[0] as HTMLElement;
    element.style.fontWeight = '400';
  }

  boldTwinBtnFontWeight() {
    let element: HTMLElement = document.getElementsByClassName('twin-btn')[0] as HTMLElement;
    element.style.fontWeight = '700';
  }



  constructor() { }

  ngOnInit() {
    // mouse click by element - In this case to load Twin as the first choice
    let element: HTMLElement = document.getElementsByClassName('twin-btn')[0] as HTMLElement;
    element.click();
    element.style.fontWeight = '700';
  }
}
