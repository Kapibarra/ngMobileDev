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
import { AccordionItemComponent } from './homepageru/shared/components/projects/accordion-item/accordion-item.component';

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
    AccordionItemComponent
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
