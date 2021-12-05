import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historicoslider',
  templateUrl: './historicoslider.component.html',
  styleUrls: ['./historicoslider.component.scss']
})
export class HistoricosliderComponent implements OnInit {
  activeSlideIndex = 0;
  slides = [
    {
      textColor: '#000',
      logo: '',
      title: 'Oda Nobunaga',
      description: 'Uno de los Señores Feudales más importantes de la historia de Japón.',
      backgroundExpanded: `url('assets/images/1H-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/1H-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'historicoDetalle/0',
    },
    {
      textColor: "#000",
      logo: "",
      title: "Minamoto no Yoshitsune",
      description: 'Uno de los más destacados generales y samuráis en la historia del país del sol naciente.',
      backgroundExpanded: `url('assets/images/2H-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/2H-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'historicoDetalle/1'
    },
    {
      textColor: "#000",
      logo: "",
      title: "Miyamoto Musashi",
      description: 'Musashi fue un filósofo, escritor, espadachín y un ronin.',
      backgroundExpanded: `url('assets/images/3H-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/3H-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'historicoDetalle/2'
     }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
