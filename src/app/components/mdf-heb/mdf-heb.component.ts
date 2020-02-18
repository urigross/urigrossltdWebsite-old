import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mdf-heb',
  templateUrl: './mdf-heb.component.html',
  styleUrls: ['./mdf-heb.component.css']
})
export class MdfHebComponent implements OnInit {
  imageName: string;
  imageNameWithExt: string;
  //Toto: Add a string variable which will cut the file ending and implement it on html of this component
  getChildEvent($event){
    this.imageNameWithExt = $event;
    this.imageName=this.imageNameAndExtToImageName(this.imageNameWithExt);
  }
  private imageNameAndExtToImageName(value:string): string{
    return value.substr(0, value.length -4);
  }

constructor() { }

ngOnInit() {
}

}
