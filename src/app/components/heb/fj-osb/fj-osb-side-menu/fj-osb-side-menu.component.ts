import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fj-osb-side-menu',
  templateUrl: './fj-osb-side-menu.component.html',
  styleUrls: ['./fj-osb-side-menu.component.css']
})
export class FjOsbSideMenuComponent implements OnInit {
@Output() stringOutput = new EventEmitter<string>();
sendChoiceToParent(value:string){
  this.stringOutput.emit(value);
}

clearFjBtnFontweight() {
  let element: HTMLElement = document.getElementsByClassName('fj-btn')[0] as HTMLElement;
  element.style.fontWeight = '400';
}

boldFjBtnFontWeight() {
  let element: HTMLElement = document.getElementsByClassName('fj-btn')[0] as HTMLElement;
  element.style.fontWeight = '700';
}


  constructor() { }

  ngOnInit(): void {
    // mouse click by element - In this case to load Twin as the first choice
    let element: HTMLElement = document.getElementsByClassName('fj-btn')[0] as HTMLElement;
    element.click();
    element.style.fontWeight = '700';
  }

}
