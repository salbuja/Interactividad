import { Historico } from './historico';

export const HISTORICOS: Historico[] = [
    {
        id: '0',
        name: 'Oda Nobunaga 織田 信長',
        image: 'assets/images/Nobunaga.png',
        description: 'Uno de los Señores Feudales más importantes de la historia de Japón, considerado como el unificador del mismo, durante esta unificación se desarrolló innovaciones en tácticas militares, el comercio libre y se dio inicio al periodo Azuchi-Momoyama.',
        audios: [{
            title: 'Oda Nobunaga',
            link: 'assets/audios/Nobunaga.mp3'
        }],
        audio:'assets/audios/Nobunaga.mp3',
        video:'assets/videos/Nobunaga.mp4',
        QRImage: 'assets/images/QROda_Nobunaga.png',
        QRlink: 'https://es.wikipedia.org/wiki/Oda_Nobunaga'
    },
    {
        id: '1',
        name: 'Minamoto no Yoshitsune 源 義経',
        image: 'assets/images/Yoshitsune.png',
        description: 'Uno de los más destacados generales y samuráis en la historia del país del sol naciente, al haber sido unas de las piezas principales en la recuperación militar del clan Minamoto en las Guerras Genpei, tras estos conflictos el clan Minamoto se estableció como el clan dominante en el territorio, Yoshitsune murió en traición en las manos de uno de los hijos de sus aliados.',
        audios: [{
            title: 'Minamoto no Yoshitsune',
            link: 'assets/audios/Yoshitsune.mp3',
        }],
        audio:'assets/audios/Yoshitsune.mp3',
        video:'assets/videos/Yoshitsune.mp4',
        QRImage: 'assets/images/QRMinamoto_no_Yoshitsune.png',
        QRlink: 'https://es.wikipedia.org/wiki/Minamoto_no_Yoshitsune'
    },
    {
        id: '2',
        name: 'Miyamoto Musashi 宮本 武蔵',
        image: 'assets/images/Musashi.png',
        description: 'Musashi fue un filósofo, escritor, espadachín y un ronin; conocido principalmente por su uso de dos espadas y el ser nunca haber sido vencido en un duelo, con un record final de 61- 0. Su obra principal fue el libro de los 5 anillos donde este detalla sus experiencias e ideas sobre artes marciales y su vida. Musashi murió de lo que se cree fue cáncer de pulmón tras haber terminado su última obra Dokkodo (El camino de la soledad).',
        audios: [{
            title: 'Miyamoto Musashi',
            link: 'assets/audios/Musashi.mp3',
        }],
        audio:'assets/audios/Musashi.mp3',
        video:'assets/videos/Musashi.mp4',
        QRImage: 'assets/images/QRMiyamoto_Musashi.png',
        QRlink: 'https://es.wikipedia.org/wiki/Miyamoto_Musashi'
    }
];