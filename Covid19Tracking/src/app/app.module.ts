import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SummaryComponent } from './summary/summary.component';
import { CountryWiseSummaryComponent } from './country-wise-summary/country-wise-summary.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
// import {HttpClient} from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SummaryComponent,
    CountryWiseSummaryComponent,
    AboutusComponent,
    SymptomsComponent,
    DataCollectionComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
