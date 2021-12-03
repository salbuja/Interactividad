import { Component, OnInit } from '@angular/core';
import { Actual } from '../shared/actual';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ActualService } from '../services/actual.service';

//audio
import { Track } from 'ngx-audio-player';   


@Component({
  selector: 'app-actual-detalle',
  templateUrl: './actual-detalle.component.html',
  styleUrls: ['./actual-detalle.component.scss']
})
export class ActualDetalleComponent implements OnInit {

msaapDisplayTitle = false;
msaapDisplayPlayList = false;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = false;
msaapDisplayRepeatControls = false;
msaapDisplayArtist = false;
msaapDisplayDuration = false;
msaapDisablePositionSlider = true;
msaapPlaylist: Track[]; 


  actual:Actual;

  constructor(private actualservice : ActualService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id  = this.route.snapshot.params['id'];
    this.actual = this.actualservice.getActual(id);
    this.msaapPlaylist=this.actual.audios
  }
  goBack(): void {
    this.location.back();
  }
}

