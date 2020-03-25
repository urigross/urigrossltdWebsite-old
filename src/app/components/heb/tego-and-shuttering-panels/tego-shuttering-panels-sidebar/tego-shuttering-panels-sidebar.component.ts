import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tego-shuttering-panels-sidebar',
  templateUrl: './tego-shuttering-panels-sidebar.component.html',
  styleUrls: ['./tego-shuttering-panels-sidebar.component.css']
})
export class TegoShutteringPanelsSidebarComponent implements OnInit {
  @Output() stringOutput = new EventEmitter<string>();
sendChoiceToParent(value:string){
  this.stringOutput.emit(value);
}

clearTegoBtnFontweight() {
  let element: HTMLElement = document.getElementsByClassName('tego-btn')[0] as HTMLElement;
  element.style.fontWeight = '400';
}

boldTegoBtnFontWeight() {
  let element: HTMLElement = document.getElementsByClassName('tego-btn')[0] as HTMLElement;
  element.style.fontWeight = '700';
}


  constructor() { }

  ngOnInit(): void {
    // mouse click by element - In this case to load Twin as the first choice
    let element: HTMLElement = document.getElementsByClassName('tego-btn')[0] as HTMLElement;
    element.click();
    element.style.fontWeight = '700';
  }

}
