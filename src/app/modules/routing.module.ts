import { NgModule } from '@angular/core';
import { HomeHebComponent } from '../components/home-heb/home-heb.component';
import { AboutHebComponent } from '../components/about-heb/about-heb.component';
import { ContactHebComponent } from '../components/contact-heb/contact-heb.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { Routes, RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';
import { PlywoodHebComponent } from '../components/plywood-heb/plywood-heb.component';
import { MdfHebComponent } from '../components/mdf-heb/mdf-heb.component';
import { TegoTlatOsbHebComponent } from '../components/tego-tlat-osb-heb/tego-tlat-osb-heb.component';
import { HardwoodHebComponent } from '../components/hardwood-heb/hardwood-heb.component';
import { MapHebComponent } from '../components/map-heb/map-heb.component';


const routes: Routes = [
    { path: 'heb/home', component: HomeHebComponent},
    { path: 'heb/about', component: AboutHebComponent, data: {color: 'white'}},
    { path: 'heb/plywood1', component: PlywoodHebComponent},
    { path: 'heb/mdf', component: MdfHebComponent},
    { path: 'heb/hardwood', component: HardwoodHebComponent},
    { path: 'heb/plywood2', component: TegoTlatOsbHebComponent},
    { path: 'heb/contact', component: ContactHebComponent},
    { path: 'heb/map', component: MapHebComponent},
    { path: 'heb/gallery', component: GalleryComponent},
    { path: '', redirectTo: '/heb/home', pathMatch: 'full' },
    { path: '**', component: Page404Component }

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
