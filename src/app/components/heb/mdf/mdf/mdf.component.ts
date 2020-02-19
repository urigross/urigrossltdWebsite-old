import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent implements OnInit {

  @Output() stringOutput = new EventEmitter<string>();

  sendChoiceToParent(value:string){
    console.log(value);
    this.stringOutput.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
