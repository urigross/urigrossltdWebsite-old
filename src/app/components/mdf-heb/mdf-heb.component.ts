import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdf-heb',
  templateUrl: './mdf-heb.component.html',
  styleUrls: ['./mdf-heb.component.css']
})
export class MdfHebComponent implements OnInit {
  imageName: string;
  imageNameWithExt: string;
  //Todo: make mdf images more attractive , fill text and align elements
  getChildEvent($event){
    this.imageName = $event;
    this.imageNameWithExt=this.imageName.concat(".jpg");
  }
  

constructor() { }

ngOnInit() {
}

}
