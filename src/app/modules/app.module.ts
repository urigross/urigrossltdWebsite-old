import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { HomeHebComponent } from '../components/home-heb/home-heb.component';
import { FooterComponent } from '../components/footer/footer.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { AboutHebComponent } from '../components/about-heb/about-heb.component';
import { ContactHebComponent } from '../components/contact-heb/contact-heb.component';
import { WazeComponent } from '../components/waze/waze.component';
import { MenuComponent } from '../components/menu/menu.component';
import { RoutingModule } from './routing.module';
import { HebPlywoodRoutingModule } from './heb-plywood-routing.module';
import { RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule, MatToolbarModule, MatListModule, MatCheckboxModule, MatIconModule, MatInputModule } from '@angular/material';
import { PlywoodHebComponent } from '../components/plywood-heb/plywood-heb.component';
import { MdfHebComponent } from '../components/mdf-heb/mdf-heb.component';
import { HardwoodHebComponent } from '../components/hardwood-heb/hardwood-heb.component';
import { TegoTlatOsbHebComponent } from '../components/tego-tlat-osb-heb/tego-tlat-osb-heb.component';
import { MapHebComponent } from '../components/map-heb/map-heb.component';
import { PlywoodSideNavbarComponent } from '../components/plywood-side-navbar/plywood-side-navbar.component';
import { BirchHebComponent } from '../components/heb/plywood/birch-heb/birch-heb.component';
import { OkoumeHebComponent } from '../components/heb/plywood/okoume-heb/okoume-heb.component';
import { TwinHebComponent } from '../components/heb/plywood/twin-heb/twin-heb.component';
@NgModule({
  declarations: [
    LayoutComponent,
    HomeHebComponent,
    FooterComponent,
    GalleryComponent,
    AboutHebComponent,
    ContactHebComponent,
    WazeComponent,
    MenuComponent,
    Page404Component,
    PlywoodHebComponent,
    MdfHebComponent,
    HardwoodHebComponent,
    TegoTlatOsbHebComponent,
    MapHebComponent,
    PlywoodSideNavbarComponent,
    BirchHebComponent,
    OkoumeHebComponent,
    TwinHebComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HebPlywoodRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
