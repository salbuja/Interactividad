import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-acuw';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import 'hammerjs';

import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


//modulos
import { HeaderComponent } from './header/header.component';
import { ActualComponent } from './actual/actual.component';
import { HistoricoComponent } from './historico/historico.component';
import { HomeComponent } from './home/home.component';
import { HistoricoDetalleComponent } from './historico-detalle/historico-detalle.component';
import { ActualDetalleComponent } from './actual-detalle/actual-detalle.component';

//servicios
import { ActualService } from './services/actual.service';
import { HistoricoService } from './services/historico.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { RouterModule } from '@angular/router';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { ActualsliderComponent } from './actualslider/actualslider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActualComponent,
    HistoricoComponent,
    HomeComponent,
    HistoricoDetalleComponent,
    ActualDetalleComponent,
    ActualsliderComponent
  ],
  imports: [ RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    FlexLayoutModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxAudioPlayerModule,
    CarouselModule
  ],
  providers: [ActualService,HistoricoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
