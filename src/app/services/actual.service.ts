import { Injectable } from '@angular/core';
import { Actual } from '../shared/actual';
import { ACTUALES } from '../shared/actuales';

@Injectable({
  providedIn: 'root'
})
export class ActualService {

  constructor() { }

  getActuales(): Actual[] {
    return ACTUALES;
  }

  getActual(id: string): Actual {
    return ACTUALES.filter((actual) => (actual.id === id))[0];
  }
}
