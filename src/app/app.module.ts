import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/home/header/header.component';
import { AppDownloadComponent } from './components/home/app-download/app-download.component';
import { FeaturesComponent } from './components/home/features/features.component';
import { DevelopersComponent } from './components/home/developers/developers.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ClientsComponent } from './components/home/clients/clients.component';
import { MaterialModule } from 'src/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RupantorComponent } from './components/rupantor/rupantor.component';
import { RupantorIntroComponent } from './components/rupantor/rupantor-intro/rupantor-intro.component';
import { RupantorContentComponent } from './components/rupantor/rupantor-content/rupantor-content.component';
import { UrbanEngineComponent } from './components/urban-engine/urban-engine.component';
import { UrbanEngineIntroComponent } from './components/urban-engine/urban-engine-intro/urban-engine-intro.component';
import { UrbanEngineContentComponent } from './components/urban-engine/urban-engine-content/urban-engine-content.component';
import { ApiComponent } from './components/api/api.component';
import { ApiIntroComponent } from './components/api/api-intro/api-intro.component';
import { ApiContentComponent } from './components/api/api-content/api-content.component';
import { SearchComponent } from './components/search/search.component';
import { SearchMapComponent } from './components/search/search-map/search-map.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AppDownloadComponent,
    FeaturesComponent,
    DevelopersComponent,
    NavbarComponent,
    ClientsComponent,
    RupantorComponent,
    RupantorIntroComponent,
    RupantorContentComponent,
    UrbanEngineComponent,
    UrbanEngineIntroComponent,
    UrbanEngineContentComponent,
    ApiComponent,
    ApiIntroComponent,
    ApiContentComponent,
    SearchComponent,
    SearchMapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AutocompleteLibModule,
    LeafletModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
