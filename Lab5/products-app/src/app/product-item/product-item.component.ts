import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product;
  @Input() deleteItem: any;
  toggleLike(): void {
    if (this.product.likedByUser) {
      this.product.likes -= 1;
    } else {
      this.product.likes += 1;
    }
    this.product.likedByUser = !this.product.likedByUser;
  }
  constructor() { }
  selectedImageIndex: number = 0;

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  ngOnInit(): void {
  }
  getDescriptionArray(description: string): string[] {
    return description.split('\n');
  }
  share(link: string): void {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    window.open(telegramUrl, '_blank');
  }
}

