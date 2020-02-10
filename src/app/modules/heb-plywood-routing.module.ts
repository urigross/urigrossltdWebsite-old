import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TwinHebComponent } from '../components/heb/plywood/twin-heb/twin-heb.component';
import { OkoumeHebComponent } from '../components/heb/plywood/okoume-heb/okoume-heb.component';
import { BirchHebComponent } from '../components/heb/plywood/birch-heb/birch-heb.component';

const routes: Routes = [
    { path: 'heb/plywood1/twin', component: TwinHebComponent},
    { path: 'heb/plywood1/okoume', component: OkoumeHebComponent},
    { path: 'heb/plywood1/birch', component: BirchHebComponent}
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class HebPlywoodRoutingModule { }
