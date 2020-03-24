import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plywood-side-navbar',
  templateUrl: './plywood-side-navbar.component.html',
  styleUrls: ['./plywood-side-navbar.component.css']
})
export class PlywoodSideNavbarComponent implements OnInit {
  @Output() stringOutput = new EventEmitter<string>();

  sendChoiceToParent(value:string) {
    this.stringOutput.emit(value);
  }



  constructor() { }

  ngOnInit() {
    // mouse click by element - In this case to load Twin as the first choice
    let element: HTMLElement = document.getElementsByClassName('twin-btn')[0] as HTMLElement;
element.click();
  }
}
