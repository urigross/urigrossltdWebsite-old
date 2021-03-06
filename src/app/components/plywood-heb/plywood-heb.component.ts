import { Component } from '@angular/core';

@Component({
  selector: 'app-plywood-heb',
  templateUrl: './plywood-heb.component.html',
  styleUrls: ['./plywood-heb.component.css']
})
export class PlywoodHebComponent {
  imageName: string;
  getChildEvent($event) {
    this.imageName = $event;
   this.fadeIn();    
  }
  fadeIn(): void {
    document.getElementById("image").animate([
      // keyframes
      { opacity: '0' },
      { opacity: '1' }
    ], {
      duration: 2000,
    });
  }
  
}