import { Component, OnInit } from '@angular/core';
import { Historico } from '../shared/historico';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HistoricoService } from '../services/historico.service';

//audio
import { Track } from 'ngx-audio-player';   

@Component({
  selector: 'app-historico-detalle',
  templateUrl: './historico-detalle.component.html',
  styleUrls: ['./historico-detalle.component.scss']
})

export class HistoricoDetalleComponent implements OnInit {

  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2,4,6];
  msaapDisplayVolumeControls = false;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = true;
  msaapPlaylist: Track[] = [
    {
        title: 'ejemplo',
        link: 'assets/audios/Musashi.mp3',
        artist: 'Artist'
    }    ]
  
      historico:Historico;

  constructor(private historicoservice:HistoricoService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];
    this.historico = this.historicoservice.getHistorico(id);
  }

  goBack(): void {
    this.location.back();
  }
  
}
