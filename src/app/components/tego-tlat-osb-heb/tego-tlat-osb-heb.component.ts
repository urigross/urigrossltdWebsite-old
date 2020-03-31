import { Component } from '@angular/core';

@Component({
  selector: 'app-tego-tlat-osb-heb',
  templateUrl: './tego-tlat-osb-heb.component.html',
  styleUrls: ['./tego-tlat-osb-heb.component.css']
})
export class TegoTlatOsbHebComponent   {
  imageName: string;
  getChildEvent($event){
    this.imageName=$event;
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