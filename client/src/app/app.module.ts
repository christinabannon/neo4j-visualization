import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FormsModule } from '@angular/forms';
import { ConfigComponent } from './config/config.component';
import { ConfigService} from './config/config.service';
import { NeovisComponent } from './neovis/neovis.component';
import { AboutComponent } from './about/about.component';
import { SelectComponent } from './select/select.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop'; 

@NgModule({
  declarations: [
    AppComponent,
    ConfigComponent,
    NeovisComponent,
    AboutComponent,
    SelectComponent
  ],
  imports: [
    AppRoutingModule, 
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    HttpClientModule, 
    MatInputModule,
    MatCardModule, 
    MatToolbarModule, 
    DragDropModule
  ],
  providers: [
    ConfigService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
