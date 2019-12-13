import { NgModule } from '@angular/core';
import { HomeHebComponent } from '../components/home-heb/home-heb.component';
import { AboutHebComponent } from '../components/about-heb/about-heb.component';
import { ContactHebComponent } from '../components/contact-heb/contact-heb.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { ProductsHebComponent } from '../components/products-heb/products-heb.component';
import { WelcomeHebComponent } from '../components/welcome-heb/welcome-heb.component';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';

const routes: Routes = [
    { path: 'heb/home', component: HomeHebComponent},
    { path: 'heb/about', component: AboutHebComponent},
    { path: 'heb/contact', component: ContactHebComponent},
    { path: 'heb/gallery', component: GalleryComponent},
    { path: 'heb/products', component: ProductsHebComponent},
    { path: 'heb/welcome', component: WelcomeHebComponent},
    { path: '', redirectTo: '/heb/home', pathMatch: 'full' },
    { path: '**', component: Page404Component }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
