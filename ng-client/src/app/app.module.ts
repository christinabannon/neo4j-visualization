import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConfigComponent } from './config/config.component';
import { NeovisComponent } from './neovis/neovis.component';

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    NeovisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
