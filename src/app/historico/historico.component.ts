import { Component, OnInit } from '@angular/core';
import { Historico } from '../shared/historico';
import { HistoricoService } from '../services/historico.service';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.scss']
})

export class HistoricoComponent implements OnInit {

  historicos: Historico[];
  SelectedHistorico : Historico;

  constructor(private historicoservice:HistoricoService) { }

  ngOnInit(): void {
 this.historicos=this.historicoservice.getHistoricos();
  }

 OnSelect(historico:Historico){
   this.SelectedHistorico=historico;
 } 

}
