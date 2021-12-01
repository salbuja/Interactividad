import { Routes } from '@angular/router';
import { ActualComponent } from '../actual/actual.component';
import { ActualsliderComponent } from '../actualslider/actualslider.component';
import { ActualDetalleComponent } from '../actual-detalle/actual-detalle.component';
import { HistoricoComponent } from '../historico/historico.component';
import { HistoricoDetalleComponent } from '../historico-detalle/historico-detalle.component';
import { HomeComponent } from '../home/home.component';
//import { ContactComponent } from '../contact/contact.component';

export const routes: Routes = [
    { path: 'home',  component: HomeComponent },
    { path: 'actual',     component: ActualComponent },
    { path: 'actualslider',     component: ActualsliderComponent },
    { path: 'actualDetalle/:id',     component: ActualDetalleComponent },
    { path: 'historico',     component: HistoricoComponent },
    { path: 'historicoDetalle/:id',     component: HistoricoDetalleComponent },
//    { path: 'contactus',     component: ContactComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ];
