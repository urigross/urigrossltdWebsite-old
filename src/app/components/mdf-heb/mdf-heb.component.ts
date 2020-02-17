import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdf-heb',
  templateUrl: './mdf-heb.component.html',
  styleUrls: ['./mdf-heb.component.css']
})
export class MdfHebComponent implements OnInit {
  imageName: string;
  getChildEvent($event){
    this.imageName = $event;
    console.log(this.imageName);
    
  }

constructor() { }

ngOnInit() {
}

}
