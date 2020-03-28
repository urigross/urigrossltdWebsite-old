import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-plywood-heb',
  templateUrl: './plywood-heb.component.html',
  styleUrls: ['./plywood-heb.component.css']
})
export class PlywoodHebComponent implements OnInit {
  imageName: string;
  getChildEvent($event){
    this.imageName=$event;
    this.fadeIn();   // I think there is a problem with asyc/promises here. I whould study this and fix the problem. 
  }

  fadeIn():void{
    document.getElementById("image").animate([
      // keyframes
       { opacity: 0},
       { opacity: 1}
    ], { 
      duration: 2000,
    });
  }


  constructor() { }
  
  ngOnInit() {
    
  }

}
