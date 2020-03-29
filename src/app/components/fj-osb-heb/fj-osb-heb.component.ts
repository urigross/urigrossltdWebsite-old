import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fj-osb-heb',
  templateUrl: './fj-osb-heb.component.html',
  styleUrls: ['./fj-osb-heb.component.css']
})
export class FjOsbHebComponent {
  imageName:string;
  getChildEvent($event){
    this.imageName=$event;
    console.log("imagename: "+this.imageName);
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
