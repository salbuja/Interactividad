import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-actualslider',
  templateUrl: './actualslider.component.html',
  styleUrls: ['./actualslider.component.scss']
})
export class ActualsliderComponent implements OnInit {
  activeSlideIndex = 0;
  slides = [
    {
      textColor: '#000',
      logo: '',
      title: 'Hirohiko Araki',
      description:'Legendario mangaka creador de la igualmente legendaria serie Jojo’s Bizarre Adventure, que lleva en publicación por 34 años por Shueisha.',
      backgroundExpanded: `url('assets/images/1A-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/1A-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'actualDetalle/0',
    },
    {
      textColor: "#000",
      logo: "",
      title: "Hideaki Anno",
      description: 'Es un Animador y Director, conocido principalmente por la icónica serie Neon Genesis Evangelion, esta ha llegado a ser comparada como la Star wars japonesa por el impacto en la cultura popular que esta ha tenido.',
      backgroundExpanded: `url('assets/images/2A-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/2A-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'actualDetalle/1'
    },
    {
      textColor: "#000",
      logo: "",
      title: "Naomi Osaka",
      description: 'Hija de un padre haitiano y una madre japonesa. Es reconocida por ser la primera Jugadora asiática en llegar al número 1 de la asociación de tenis femenil WTA.',
      backgroundExpanded: `url('assets/images/3A-Expanded.png')`,
      backgroundCollapsed: `url('assets/images/3A-Collapsed.png')`,
      ctaText: 'Detalles',
      ctaLink: 'actualDetalle/2'
     }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
