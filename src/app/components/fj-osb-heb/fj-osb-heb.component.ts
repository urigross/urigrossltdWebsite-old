import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fj-osb-heb',
  templateUrl: './fj-osb-heb.component.html',
  styleUrls: ['./fj-osb-heb.component.css']
})
export class FjOsbHebComponent implements OnInit {
  imageName:string;
  getChildEvent($event){
    this.imageName=$event;
    console.log("imagename: "+this.imageName);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
