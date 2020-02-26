import { Component, ViewChild, OnInit } from '@angular/core';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { ImageService } from 'src/app/services/image.service';


@Component({
  selector: 'app-hardwood-heb',
  templateUrl: './hardwood-heb.component.html',
  styleUrls: ['./hardwood-heb.component.css'],

})
export class HardwoodHebComponent implements OnInit {

  public images: string[] = new Array<string>();
  public imageNames: string[] = new Array<string>();
  unpauseOnArrow: boolean = false;
  paused: boolean = false;
  pauseOnHover: boolean = true;

  constructor(private imageService: ImageService) {

  }
  ngOnInit() {
    this.images=[];
    this.imageNames = this.imageService.getImageName();
    this.images = this.imageService.getHardwoodImagesPath();

  }




  @ViewChild('carousel', { static: true }) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;

  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source == NgbSlideEventSource.ARROW_LEFT || slideEvent.source == NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (!slideEvent.paused && slideEvent.source == NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}
