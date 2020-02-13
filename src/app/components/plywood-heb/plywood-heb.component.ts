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
    console.log(this.imageName);
  }
  
  constructor() { }
  
  ngOnInit() {
    
  }

}
