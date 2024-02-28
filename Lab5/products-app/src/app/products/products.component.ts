import {Component, OnInit} from '@angular/core';
import { Product } from '../product';
import { Category } from '../category';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'Fender guitar',
      products: [
        { name: 'Fender CC-60SCE Natural', description: 'Scale 25.3 inches.\n' +
                   'Acoustic type\n' +
                   'Number of strings6\n' +
                   'Material: rosewood, mahogany\n' +
                   'Bridge type: fixed\n' +
                   'Number of frets 20\n' +
                   'String material: metal\n' +
                   'Left-handed No\n' +
                   'Inlaysimple\n' +
                   'FeaturesPiezo sensor\n' +
                   'Brown color\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/h38/ha9/63913384280094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hc9/63913390964766.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h13/63913393782814.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/fender-cc-60sce-natural-100493853/?c=750000000',
        likes: 45, likedByUser: false },
        { name: 'Fender Player Stratocaster Buttercream', description: 'Scale 25.5 inches.\n' +
                   'Type electric guitar\n' +
                   'Number of strings6\n' +
                   'Mounting type: bolted\n' +
                   'Bridge tremolo type\n' +
                   'Number of frets 22\n' +
                   'Volume controls 1\n' +
                   'Tone controls 2\n' +
                   'Left-handed No\n' +
                   'Yellow color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h8d/h77/63800431706142.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h13/hd0/63800432558110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hfc/63800433410078.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-buttercream-14200323/?c=750000000',
        likes: 78, likedByUser: false },
        { name: 'Fender Player Stratocaster HSS Maple Fingerboard Polar White', description: 'Scale 25.5 inches.\n' +
                   'Type electric guitar\n' +
                   'Number of strings 6\n' +
                   'Mounting type: bolted\n' +
                   'Number of frets 22\n' +
                   'Volume controls 1\n' +
                   'Tone controls 2\n' +
                   'Left-handed No\n' +
                   'Neck width at nut 42.0 mm\n' +
                   'White color', image: ['https://resources.cdn-kaspi.kz/img/m/p/hf2/hbb/63865583140894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h18/63865589399582.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h19/63865586024478.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-hss-maple-fingerboard-polar-white-100088672/?c=750000000',
        likes: 48, likedByUser: false },
        { name: 'Fender Player Telecaster HH 3-Color Sunburst', description: 'Scale 25.5 inches.\n' +
            'Type electric guitar\n' +
            'Number of strings 6\n' +
            'Mounting type: bolted\n' +
            'Material: grifaklene, pao ferro\n' +
            'Bridge type: fixed\n' +
            'Number of frets 22\n' +
            'Left-handed No\n' +
            'Brown color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h0a/h3a/69879849648158.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h67/hb3/69879850434590.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h07/h70/69879850696734.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/fender-player-telecaster-hh-3-color-sunburst-109271356/?c=750000000',
        likes: 10, likedByUser: false },
        { name: 'Fender Player Telecaster HH Tidepool', description: 'Scale 25.5 inches.\n' +
                   'Type electric guitar\n' +
                   'Number of strings 6\n' +
                   'Mounting type: bolted\n' +
                   'Material: grifaklene, pao ferro\n' +
                   'Bridge type: fixed\n' +
                   'Number of frets 22\n' +
                   'Left-handed No\n' +
                   'Blue color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h87/hb0/63788943966238.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h15/hd4/63788945178654.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6b/h26/63788944523294.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/fender-player-telecaster-hh-tidepool-14200237/?c=750000000',
        likes: 19, likedByUser: false }
      ],
    },
    {
      name: 'Les Paul guitar',
      products: [
        { name: 'Cort CR250 VB Brown', description: 'Scale 24.75 inch.\n' +
                   'Type electric guitar\n' +
                   'Number of strings 6\n' +
                   'Case shape les paul\n' +
                   'Body material: maple, mahogany\n' +
                   'Number of frets 22\n' +
                   'Pad radius305.0 mm\n' +
                   'Volume controls 2\n' +
                   'Tone controls 2\n' +
                   'Left-handed No\n' +
                   'Brown color', image: ['https://resources.cdn-kaspi.kz/img/m/p/hdb/h90/63768939823134.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4c/63768941559838.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5a/hb7/63768942149662.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/cort-cr250-vb-brown-14200024/?c=750000000',
        likes: 27, likedByUser: false },
        { name: 'Epiphone Les Paul Standard 60s Ebony', description: 'Scale 24.75 inch.\n' +
                   'Typ eelectric guitar\n' +
                   'Number of strings 6\n' +
                   'Case shape les paul\n' +
                   'Number of frets 22\n' +
                   'Volume controls 2\n' +
                   'Tone controls 2\n' +
                   'Left-handed No\n' +
                   'Neck width at nut 43.0 mm\n' +
                   'Black color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h29/he4/84867202088990.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h41/ha5/84867202482206.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h78/hbd/84867202613278.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/epiphone-les-paul-standard-60s-ebony-chernyi-115828767/?c=750000000',
        likes: 38, likedByUser: false },
        { name: 'Epiphone Les Paul Classic Honey Burst', description: 'Scale 24.75 inch.\n' +
                   'Type electric guitar\n' +
                   'Number of strings 6\n' +
                   'Case shape les paul\n' +
                   'Body material: mahogany\n' +
                   'Number of frets 22\n' +
                   'Volume controls 2\n' +
                   'Tone controls 2\n' +
                   'Left-handed No\n' +
                   'Brown color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h6b/84863428198430.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hb0/84863428395038.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h79/84863428329502.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/epiphone-les-paul-classic-honey-burst-115823134/?c=750000000',
        likes: 72, likedByUser: false },
        { name: 'Cort CR250 TBK Transparent Black', description: 'Scale 24.75 inch.\n' +
            'Type electric guitar\n' +
            'Number of strings 6\n' +
            'Case shape les paul\n' +
            'Body material: mahogany\n' +
            'Number of frets 22\n' +
            'Volume controls 2\n' +
            'Tone controls 2\n' +
            'Left-handed No\n' +
            'Black color', image: ['https://resources.cdn-kaspi.kz/img/m/p/h6b/h0b/63934054793246.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h92/63934059544606.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb5/h75/63934056202270.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/cort-cr250-tbk-transparent-black-100511383/?c=750000000',
        likes: 51, likedByUser: false },
        { name: 'Smiger Les Paul L-G9-P1 BKS Black', description: 'Type electric guitar\n' +
            'Scale 24.7 inches.\n' +
            'Case shape les paul\n' +
            'Body material: maple\n' +
            'Number of frets 22\n' +
            'Volume controls 2\n' +
            'Tone controls 2\n' +
            'Left-handed No\n' +
            'Brown color', image: ['https://resources.cdn-kaspi.kz/img/m/p/hf3/h35/84933594972190.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h8f/63962966949918.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h69/h7e/63962969735198.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/smiger-les-paul-l-g9-p1-bks-black-103571245/?c=750000000',
        likes: 4, likedByUser: false }
      ],
    },
    {
      name: 'Lava music',
      products: [
        { name: 'LAVA MUSIC ME 3 38 White', description: 'Scale 24.0 inch.\n' +
                   'Acoustic type,\n' +
                   'Number of strings 6,\n' +
                   'Body material carbon,\n' +
                   'Number of frets 18,\n' +
                   'String material: metal,\n' +
                   'Left-handed No,\n' +
                   'Features Piezo sensor,\n' +
                   'White color,\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/h0b/h18/64611803398174.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h75/h71/64611809493022.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2e/hfd/64611806838814.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/lava-music-me-3-38-white-104321995/?c=750000000',
        likes: 15, likedByUser: false },
        { name: 'LAVA MUSIC LM3RD36', description: 'Acoustic type,\n' +
            'Number of strings 6,\n' +
            'Body material carbon,\n' +
            'Number of frets 18,\n' +
            'String material: metal,\n' +
            'Left-handed No,\n' +
            'Features Piezo sensor,\n' +
            'Red color,\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/hc7/he6/85200674258974.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h99/h5a/85200674324510.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hca/hce/85200674390046.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/lava-music-lm3rd36-krasnyi-116719257/?c=750000000',
        likes: 39, likedByUser: false },
        { name: 'LAVA MUSIC BLUE LAVA Touch', description: 'Number of strings 6,\n' +
            'Body material carbon,\n' +
            'Number of frets 18,\n' +
            'String material: metal,\n' +
            'Left-handed No,\n' +
            'Features Piezo sensor,\n' +
            'White color,\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h19/80548001710110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h75/h30/80548001841182.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h16/80548001906718.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/lava-music-blue-lava-touch-belyi-110123472/?c=750000000',
        likes: 13, likedByUser: false },
        { name: 'LAVA MUSIC BLUE LAVA Touch Ocean Blue', description: 'Number of strings 6,\n' +
            'Scale 23.5 inches.,\n' +
            'Number of frets 18,\n' +
            'String material: metal,\n' +
            'Left-handed No,\n' +
            'Features Piezo sensor,\n' +
            'Blue color,\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/ha7/h9f/66853605146654.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h1a/hea/66853606195230.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h73/h44/66853606719518.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/lava-music-blue-lava-touch-ocean-blue-goluboi-108025800/?c=750000000',
        likes: 31, likedByUser: false },
        { name: 'LAVA MUSIC BLUE LAVA Touch Aqua Green', description: 'Body material carbon,\n' +
            'Number of frets 18,\n' +
            'String material: metal,\n' +
            'Left-handed No,\n' +
            'Features Piezo sensor,\n' +
            'Green color,\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/he1/h15/66853607768094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf3/haf/66853610389534.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hb9/66853609472030.jpg?format=gallery-medium'],
          rating: 0.0, link: 'https://kaspi.kz/shop/p/lava-music-blue-lava-touch-aqua-green-zelenyi-108025804/?c=750000000',
        likes: 4, likedByUser: false }
      ],
    },
    {
      name: 'Acoustic guitar',
      products: [
        { name: 'Yamaha F310', description: 'Scale 25.0 inches.\n' +
                   'Type classical\n' +
                   'Number of strings 6\n' +
                   'Material: mahogany, rosewood\n' +
                   'Number of frets 20\n' +
                   'Left-handed No\n' +
                   'Orange color\n' +
                   'With connection No\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/h94/h62/63762445795358.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h12/h56/63762447106078.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h8c/h9e/63762448220190.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/yamaha-f310-zheltyi-korichnevyi-14100411/?c=750000000',
        likes: 3, likedByUser: false },
        { name: 'Cort AC100 SG', description: 'Scale 25.6 inches.\n' +
                   'Type classical\n' +
                   'Number of strings 6\n' +
                   'Material: mahogany, rosewood\n' +
                   'Number of frets 19\n' +
                   'Left-handed No\n' +
                   'Brown color\n' +
                   'With connection No\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/hdb/63842662383646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h28/h04/63842667757598.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h81/h04/63842665267230.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/cort-ac100-sg-korichnevyi-14100601/?c=750000000',
        likes: 15, likedByUser: false },
        { name: 'Cort AD810 BKS Black Satin', description: 'Scale 25.6 inches.\n' +
            'Type acoustic\n' +
            'Number of strings 6\n' +
            'Material: mahogany, rosewood\n' +
            'Number of frets 20\n' +
            'Left-handed No\n' +
            'Black color\n' +
            'With connection No\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/h74/h2b/63788973654046.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hbe/hf4/63788976046110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3f/hf0/63788975390750.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/cort-ad810-bks-black-satin-14100372/?c=750000000',
        likes: 3, likedByUser: false },
        { name: 'Music Room Smiger SM-411 A BK', description: 'Scale 25.7 inches.\n' +
            'Type acoustic\n' +
            'Number of strings 6\n' +
            'Material: rosewood\n' +
            'Number of frets 20\n' +
            'Left-handed No\n' +
            'Black color\n' +
            'With connection No\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/hf6/h8f/85097558147102.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hc2/h60/85017346768926.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/he5/h13/85097558212638.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/music-room-smiger-sm-411-a-bk-chernyi-110594502/?c=750000000',
        likes: 53, likedByUser: false },
        { name: 'Adagio KN41WRS Brown', description: 'Scale 25.5 inches.\n' +
            'Type acoustic\n' +
            'Number of strings 6\n' +
            'Material: rosewood\n' +
            'Number of frets 21\n' +
            'Left-handed No\n' +
            'Brown color\n' +
            'With connection No\n', image: ['https://resources.cdn-kaspi.kz/img/m/p/hbd/h77/63917903216670.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2e/hfc/63917906952222.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hf7/hf6/63918013906974.jpg?format=gallery-medium'],
          rating: 5.0, link: 'https://kaspi.kz/shop/p/adagio-kn41wrs-brown-100361906/?c=750000000',
        likes: 42, likedByUser: false }
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  selectedImageIndex: { [key: number]: number } = {};
  selectImage(productIndex: number, imageIndex: number): void {
    this.selectedImageIndex[productIndex] = imageIndex;
  }
  getDescriptionArray(description: string): string[] {
    return description.split('\n');
  }
  activeCategoryIndex: number | null = null;

  toggleCategory(index: number): void {
    this.activeCategoryIndex = this.activeCategoryIndex === index ? null : index;
  }

  share(link: string): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
