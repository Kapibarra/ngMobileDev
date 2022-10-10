import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
