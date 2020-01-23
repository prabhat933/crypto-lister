import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ListingComponent } from "./components/listing/listing.component";
import { HeadingComponent } from "./components/heading/heading.component";
import { ChartingComponent } from "./components/charting/charting.component";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { CryptoServiceService } from "./crypto-service.service";
import { HttpClientModule } from "@angular/common/http";
import { PriceChartComponent } from "./components/price-chart/price-chart.component";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    HeadingComponent,
    ChartingComponent,
    PriceChartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot([
      { path: "comparechart", component: ChartingComponent },
      { path: "", component: ListingComponent },
      { path: "pricechart", component: PriceChartComponent }
    ]),
    AppRoutingModule
  ],
  providers: [CryptoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
