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

  constructor() { }

  ngOnInit(): void {
  }

}
