import { Component, OnInit } from '@angular/core';
import { Actual } from '../shared/actual';
import { ActualService } from '../services/actual.service';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

  actuales: Actual[];
  selectedActual:Actual;

  constructor(private actualservice: ActualService) { }

  ngOnInit(): void {
    this.actuales=this.actualservice.getActuales();
  }

  OnSelect(actual:Actual) {
    this.selectedActual=actual;
  }
}
