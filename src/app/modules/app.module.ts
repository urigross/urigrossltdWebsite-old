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
import { RouterModule } from '@angular/router';
import { Page404Component } from '../components/page404/page404.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PlywoodHebComponent } from '../components/plywood-heb/plywood-heb.component';
import { MdfHebComponent } from '../components/mdf-heb/mdf-heb.component';
import { HardwoodHebComponent } from '../components/hardwood-heb/hardwood-heb.component';
import { TegoTlatOsbHebComponent } from '../components/tego-tlat-osb-heb/tego-tlat-osb-heb.component';
import { MapHebComponent } from '../components/map-heb/map-heb.component';
import { PlywoodSideNavbarComponent } from '../components/plywood-side-navbar/plywood-side-navbar.component';
import { BirchHebComponent } from '../components/heb/plywood/birch-heb/birch-heb.component';
import { OkoumeHebComponent } from '../components/heb/plywood/okoume-heb/okoume-heb.component';
import { TwinHebComponent } from '../components/heb/plywood/twin-heb/twin-heb.component';
import { MdfSideNavbarComponent } from '../components/mdf-side-navbar/mdf-side-navbar.component';
import { MdfComponent } from '../components/heb/mdf/mdf/mdf.component';
import { MdfMrComponent } from '../components/heb/mdf/mdf-mr/mdf-mr.component';
import { MdfMrMelamineComponent } from '../components/heb/mdf/mdf-mr-melamine/mdf-mr-melamine.component';
import { MdfVeneerComponent } from '../components/heb/mdf/mdf-veneer/mdf-veneer.component';
import { Hardwood } from '../models/hardwood';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AfricanBlackOframComponent } from '../components/heb/hardwood/african-black-ofram/african-black-ofram.component';
import { AfricanMahagoniSapelliComponent } from '../components/heb/hardwood/african-mahagoni-sapelli/african-mahagoni-sapelli.component';
import { AmericanSouthernYellowPineComponent } from '../components/heb/hardwood/american-southern-yellow-pine/american-southern-yellow-pine.component';
import { EuropeanOakComponent } from '../components/heb/hardwood/european-oak/european-oak.component';
import { EuropeanBeechwoodComponent } from '../components/heb/hardwood/european-beechwood/european-beechwood.component';
import { AmericanYellowPoplarComponent } from '../components/heb/hardwood/american-yellow-poplar/american-yellow-poplar.component';
import { AmericanWhiteOakComponent } from '../components/heb/hardwood/american-white-oak/american-white-oak.component';
import { AmericanRedOakComponent } from '../components/heb/hardwood/american-red-oak/american-red-oak.component';
import { AmericanWhiteAshComponent } from '../components/heb/hardwood/american-white-ash/american-white-ash.component';
import { AmericanWalnutComponent } from '../components/heb/hardwood/american-walnut/american-walnut.component';
import { AmericanDuglasFirComponent } from '../components/heb/hardwood/american-duglas-fir/american-duglas-fir.component';
import { AmericanCherryComponent } from '../components/heb/hardwood/american-cherry/american-cherry.component';
import { AmericanHardMapleComponent } from '../components/heb/hardwood/american-hard-maple/american-hard-maple.component';
import { FormsModule } from '@angular/forms';


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
    MdfSideNavbarComponent,
    MdfComponent,
    MdfMrComponent,
    MdfMrMelamineComponent,
    MdfVeneerComponent,
    AfricanBlackOframComponent,
    AfricanMahagoniSapelliComponent,
    AmericanSouthernYellowPineComponent,
    EuropeanOakComponent,
    EuropeanBeechwoodComponent,
    AmericanYellowPoplarComponent,
    AmericanWhiteOakComponent,
    AmericanRedOakComponent,
    AmericanWhiteAshComponent,
    AmericanWalnutComponent,
    AmericanDuglasFirComponent,
    AmericanCherryComponent,
    AmericanHardMapleComponent
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
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    NgbModule,
    FormsModule

  ],
  providers: [Hardwood],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
