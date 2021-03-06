import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

import { DurationPipe } from './common/pipes/duration.pipe';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TrailDetailComponent } from './trail-detail/trail-detail.component';
import { TrailsComponent } from './trails/trails.component';
import { TrailSearchComponent } from './trail-search/trail-search.component';
import { SegmentComponent } from './segment/segment.component';
import { BlazeComponent } from './blaze/blaze.component';
import { WeatherComponent } from './weather/weather.component';
import { TrailTypeComponent } from './trail-type/trail-type.component';
import { MessagesComponent } from './messages/messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { GalleryModule } from 'ng-gallery';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // ),

    BrowserAnimationsModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    GalleryModule,
    MatSnackBarModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    TrailsComponent,
    TrailDetailComponent,
    MessagesComponent,
    TrailSearchComponent,
    DurationPipe,
    BlazeComponent,
    SegmentComponent,
    WeatherComponent,
    TrailTypeComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
