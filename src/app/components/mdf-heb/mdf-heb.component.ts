import { Component } from '@angular/core';

@Component({
  selector: 'app-mdf-heb',
  templateUrl: './mdf-heb.component.html',
  styleUrls: ['./mdf-heb.component.css']
})
export class MdfHebComponent  {
  imageName: string;
  imageNameWithExt: string;
  //Todo: make mdf images more attractive , fill text and align elements
  getChildEvent($event){
    this.imageName = $event;
    this.imageNameWithExt=this.imageName.concat(".jpg");
    this.fadeOut();
  }
  
  fadeOut():void{
    document.getElementById("image").animate([
      // keyframes
       { opacity: 0},
       { opacity: 1}
    ], { 
      duration: 2000,
    });
  }
}