import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

import {ActivityService} from './activity.service';
import { appRoutes } from '../routes';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';

import {MapService} from './map.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivityListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
