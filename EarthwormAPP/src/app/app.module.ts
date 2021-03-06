import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PlantListComponent } from './plant-list/plant-list.component';
import { PlantPageComponent } from './plant-page/plant-page.component';
import { GardenComponent } from './garden/garden.component';
import { GardenerComponent } from './gardener/gardener.component';
import { PlantPreviewComponent } from './plant-preview/plant-preview.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GardenPageComponent } from './garden-page/garden-page.component';
import { CreateGardenComponent } from './create-garden/create-garden.component';
import { GardenCenterComponent } from './garden-center/garden-center.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PlantListComponent,
    PlantPageComponent,
    GardenComponent,
    GardenerComponent,
    PlantPreviewComponent,
    HomePageComponent,
    GardenPageComponent,
    CreateGardenComponent,
    GardenCenterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
