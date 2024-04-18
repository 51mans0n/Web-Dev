import {Component, OnInit} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  products: Product[] = [
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/hdb/h90/63768939823134.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4c/63768941559838.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5a/hb7/63768942149662.jpg?format=gallery-medium'],
      name: 'Cort CR250 VB Brown',
      description:
        'Scale 24.75 inch.\n' +
        'Type electric guitar\n' +
        'Number of strings 6\n' +
        'Case shape les paul\n' +
        'Body material: maple, mahogany\n' +
        'Number of frets 22\n' +
        'Pad radius305.0 mm\n' +
        'Volume controls 2\n' +
        'Tone controls 2\n' +
        'Left-handed No\n' +
        'Brown color',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/cort-cr250-vb-brown-14200024/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h38/ha9/63913384280094.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hc9/63913390964766.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h13/63913393782814.jpg?format=gallery-medium'],
      name: 'Fender CC-60SCE Natural',
      description:
        'Scale 25.3 inches.\n' +
        'Acoustic type\n' +
        'Number of strings6\n' +
        'Material: rosewood, mahogany\n' +
        'Bridge type: fixed\n' +
        'Number of frets 20\n' +
        'String material: metal\n' +
        'Left-handed No\n' +
        'Inlaysimple\n' +
        'FeaturesPiezo sensor\n' +
        'Brown color\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/fender-cc-60sce-natural-100493853/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h8d/h77/63800431706142.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h13/hd0/63800432558110.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h7c/hfc/63800433410078.jpg?format=gallery-medium'],
      name: 'Fender Player Stratocaster Buttercream',
      description:
        'Scale 25.5 inches.\n' +
        'Type electric guitar\n' +
        'Number of strings6\n' +
        'Mounting type: bolted\n' +
        'Bridge tremolo type\n' +
        'Number of frets 22\n' +
        'Volume controls 1\n' +
        'Tone controls 2\n' +
        'Left-handed No\n' +
        'Yellow color',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-buttercream-14200323/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h29/he4/84867202088990.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h41/ha5/84867202482206.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h78/hbd/84867202613278.jpg?format=gallery-medium'],
      name: 'Epiphone Les Paul Standard 60s Ebony',
      description:
        'Scale 24.75 inch.\n' +
        'Typ eelectric guitar\n' +
        'Number of strings 6\n' +
        'Case shape les paul\n' +
        'Number of frets 22\n' +
        'Volume controls 2\n' +
        'Tone controls 2\n' +
        'Left-handed No\n' +
        'Neck width at nut 43.0 mm\n' +
        'Black color',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/epiphone-les-paul-standard-60s-ebony-chernyi-115828767/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h96/h6b/84863428198430.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h08/hb0/84863428395038.png?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h79/84863428329502.jpg?format=gallery-medium'],
      name: 'Epiphone Les Paul Classic Honey Burst',
      description:
        'Scale 24.75 inch.\n' +
        'Type electric guitar\n' +
        'Number of strings 6\n' +
        'Case shape les paul\n' +
        'Body material: mahogany\n' +
        'Number of frets 22\n' +
        'Volume controls 2\n' +
        'Tone controls 2\n' +
        'Left-handed No\n' +
        'Brown color',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/epiphone-les-paul-classic-honey-burst-115823134/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/hf2/hbb/63865583140894.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h9a/h18/63865589399582.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h3a/h19/63865586024478.jpg?format=gallery-medium'],
      name: 'Fender Player Stratocaster HSS Maple Fingerboard Polar White',
      description:
        'Scale 25.5 inches.\n' +
        'Type electric guitar\n' +
        'Number of strings 6\n' +
        'Mounting type: bolted\n' +
        'Number of frets 22\n' +
        'Volume controls 1\n' +
        'Tone controls 2\n' +
        'Left-handed No\n' +
        'Neck width at nut 42.0 mm\n' +
        'White color',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/fender-player-stratocaster-hss-maple-fingerboard-polar-white-100088672/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h87/hb0/63788943966238.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h15/hd4/63788945178654.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h6b/h26/63788944523294.jpg?format=gallery-medium'],
      name: 'Fender Player Telecaster HH Tidepool',
      description:
        'Scale 25.5 inches.\n' +
        'Type electric guitar\n' +
        'Number of strings 6\n' +
        'Mounting type: bolted\n' +
        'Material: grifaklene, pao ferro\n' +
        'Bridge type: fixed\n' +
        'Number of frets 22\n' +
        'Left-handed No\n' +
        'Blue color',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/fender-player-telecaster-hh-tidepool-14200237/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/h0b/h18/64611803398174.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h75/h71/64611809493022.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h2e/hfd/64611806838814.jpg?format=gallery-medium'],
      name: 'LAVA MUSIC ME 3 38 White',
      description:
        'Scale 24.0 inch.\n' +
        'Acoustic type,\n' +
        'Number of strings 6,\n' +
        'Body material carbon,\n' +
        'Number of frets 18,\n' +
        'String material: metal,\n' +
        'Left-handed No,\n' +
        'Features Piezo sensor,\n' +
        'White color,\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/lava-music-me-3-38-white-104321995/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/hcb/ha2/83607869292574.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h35/h2c/83607870865438.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h38/h26/83607870341150.jpg?format=gallery-medium'],
      name: 'Jackson X SERIES RHOADS RRX24 CAMO 291-3636-599 Gray',
      description:
        'Scale 25.5 inches.\n' +
        'Type electric guitar\n' +
        'Number of strings 6\n' +
        'Number of frets 24\n' +
        'Volume controls 2\n' +
        'Tone controls 1\n' +
        'Left-handed No\n' +
        'Color: black, blue',
      rating: 0.0,
      link: 'https://kaspi.kz/shop/p/jackson-x-series-rhoads-rrx24-camo-291-3636-599-gray-113188403/?c=750000000'
    },
    {
      image: ['https://resources.cdn-kaspi.kz/img/m/p/hfd/hdb/63842662383646.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h28/h04/63842667757598.jpg?format=gallery-medium', 'https://resources.cdn-kaspi.kz/img/m/p/h81/h04/63842665267230.jpg?format=gallery-medium'],
      name: 'Cort AC100 SG',
      description:
        'Scale 25.6 inches.\n' +
        'Type classical\n' +
        'Number of strings 6\n' +
        'Material: mahogany, rosewood\n' +
        'Number of frets 19\n' +
        'Left-handed No\n' +
        'Brown color\n' +
        'With connection No\n',
      rating: 5.0,
      link: 'https://kaspi.kz/shop/p/cort-ac100-sg-korichnevyi-14100601/?c=750000000'
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

  share(link: string): void {
    window.open(`https://t.me/share/url?url=${encodeURIComponent(link)}`, '_blank');
  }
}
