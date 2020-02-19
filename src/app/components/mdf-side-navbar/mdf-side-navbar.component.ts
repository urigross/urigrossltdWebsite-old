import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mdf-side-navbar',
  templateUrl: './mdf-side-navbar.component.html',
  styleUrls: ['./mdf-side-navbar.component.css']
})
export class MdfSideNavbarComponent implements OnInit {
@Output() stringOutput = new EventEmitter<string>();
// todo: something is not working with link to mdf-mr check with console.log ... 
sendChoiceToParent(value:string){
  this.stringOutput.emit(value);
}
  constructor() { }

  ngOnInit(): void {
  }

}
