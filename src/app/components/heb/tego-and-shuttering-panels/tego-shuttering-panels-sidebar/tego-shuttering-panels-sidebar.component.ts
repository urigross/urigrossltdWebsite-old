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

  constructor() { }

  ngOnInit(): void {
  }

}
