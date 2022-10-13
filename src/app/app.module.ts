import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/shared/components/header/header.component';
import { HeroComponent } from './homepage/shared/components/hero/hero.component';
import { AboutComponent } from './homepage/shared/components/about/about.component';
import { ProjectsComponent } from './homepage/shared/components/projects/projects.component';
import { TrafficComponent } from './homepage/shared/components/traffic/traffic.component';
import { MapComponent } from './homepage/shared/components/map/map.component';
import { JobComponent } from './homepage/shared/components/job/job.component';
import { ContactsComponent } from './homepage/shared/components/contacts/contacts.component';
import { AccorionItemComponent } from './homepage/shared/components/projects/accorion-item/accorion-item.component';
import { BurgerComponent } from './homepage/shared/components/burger/burger.component';
import { HomepageruComponent } from './homepageru/homepageru.component';
import { AboutRuComponent } from './homepageru/shared/components/about-ru/about-ru.component';
import { BurgerRuComponent } from './homepageru/shared/components/burger-ru/burger-ru.component';
import { ContactsRuComponent } from './homepageru/shared/components/contacts-ru/contacts-ru.component';
import { HeaderRuComponent } from './homepageru/shared/components/header-ru/header-ru.component';
import { HeroRuComponent } from './homepageru/shared/components/hero-ru/hero-ru.component';
import { JobRuComponent } from './homepageru/shared/components/job-ru/job-ru.component';
import { MapRuComponent } from './homepageru/shared/components/map-ru/map-ru.component';
import { ProjectsRuComponent } from './homepageru/shared/components/projects-ru/projects-ru.component';
import { AccordionItemRuComponent } from './homepageru/shared/components/projects-ru/accordion-item-ru/accordion-item-ru.component';
import { TrafficRuComponent } from './homepageru/shared/components/traffic-ru/traffic-ru.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ProjectsComponent,
    TrafficComponent,
    MapComponent,
    JobComponent,
    ContactsComponent,
    AccorionItemComponent,
    BurgerComponent,
    HomepageruComponent,
    AboutRuComponent,
    BurgerRuComponent,
    ContactsRuComponent,
    HeaderRuComponent,
    HeroRuComponent,
    JobRuComponent,
    MapRuComponent,
    ProjectsRuComponent,
    AccordionItemRuComponent,
    TrafficRuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
