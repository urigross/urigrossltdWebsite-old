import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayoutComponent } from '../components/layout/layout.component';
import { WelcomeHebComponent } from '../components/welcome-heb/welcome-heb.component';
import { HomeHebComponent } from '../components/home-heb/home-heb.component';
import { HeaderHebComponent } from '../components/header-heb/header-heb.component';
import { FooterComponent } from '../components/footer/footer.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { AboutHebComponent } from '../components/about-heb/about-heb.component';
import { ContactHebComponent } from '../components/contact-heb/contact-heb.component';
import { ProductsHebComponent } from '../components/products-heb/products-heb.component';
import { GooglemapComponent } from '../components/googlemap/googlemap.component';
import { WazeComponent } from '../components/waze/waze.component';
import { MenuHebComponent } from '../components/menu-heb/menu-heb.component';
import { MenuComponent } from '../components/menu/menu.component';
import { RoutingModule } from './routing.module';
import { RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    LayoutComponent,
    WelcomeHebComponent,
    HomeHebComponent,
    HeaderHebComponent,
    FooterComponent,
    GalleryComponent,
    AboutHebComponent,
    ContactHebComponent,
    ProductsHebComponent,
    GooglemapComponent,
    WazeComponent,
    MenuHebComponent,
    MenuComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,

  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
