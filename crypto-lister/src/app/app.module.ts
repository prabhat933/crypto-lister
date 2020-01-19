import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import { HeadingComponent } from './components/heading/heading.component';
import { ChartingComponent } from './components/charting/charting.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CryptoServiceService } from './crypto-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeadingComponent,
    ChartingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      {path:'app-charting',component:ChartingComponent},
      {path: '', component:ListingComponent},
      {path:'',component:ListingComponent}
    ]),
    AppRoutingModule
  ],
  providers: [CryptoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
