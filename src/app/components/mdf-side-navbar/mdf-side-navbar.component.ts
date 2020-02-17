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
  constructor() { }

  ngOnInit(): void {
  }

}
