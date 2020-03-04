import { Injectable } from '@angular/core';
import { Hardwood } from '../models/hardwood';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private hardwoods:Hardwood) { }

  public getHardwoodImagesPath():string[]{
    let str: string[] = new Array<string>();  // Declared a new array
    for ( var i = 0; i < this.hardwoods.altName.length; i++ ){
      str[i]= this.hardwoods.altName[i]; // Get the value only..
      str[i] = str[i].split(' ').join('-');
      str[i] = str[i].toLocaleLowerCase();
      str[i] = `../../../assets/images/hardwoods/${str[i]}.png`;
    }
    return str;
  }

  public getImageName():string[]{
    return this.hardwoods.name; 
  }
}





