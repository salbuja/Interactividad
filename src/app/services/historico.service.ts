import { Injectable } from '@angular/core';
import { Historico } from '../shared/historico';
import { HISTORICOS } from '../shared/historicos';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  constructor() { }

  getHistoricos(): Historico[] {
    return HISTORICOS;
  }

  getHistorico(id: string): Historico {
    return HISTORICOS.filter((historico) => (historico.id === id))[0];
  }
}
