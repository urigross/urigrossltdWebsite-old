import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mdf-side-navbar',
  templateUrl: './mdf-side-navbar.component.html',
  styleUrls: ['./mdf-side-navbar.component.css']
})
export class MdfSideNavbarComponent implements OnInit {
@Output() stringOutput = new EventEmitter<string>();
sendChoiceToParent(value:string){
  this.stringOutput.emit(value);
}

clearMdfBtnFontweight() {
  let element: HTMLElement = document.getElementsByClassName('mdf-btn')[0] as HTMLElement;
  element.style.fontWeight = '400';
}

boldMdfBtnFontWeight() {
  let element: HTMLElement = document.getElementsByClassName('mdf-btn')[0] as HTMLElement;
  element.style.fontWeight = '700';
}

  constructor() { }

  ngOnInit(): void {
    // mouse click by element - In this case to load Twin as the first choice
    let element: HTMLElement = document.getElementsByClassName('mdf-btn')[0] as HTMLElement;
    element.click();
    element.style.fontWeight = '700';

  }

}
