import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  deleteItem = (name: string) => {
    this.products = this.products.filter( (el) => {
      if (el.name === name) {
        return false;
      }
      return true;
    } )
  }
}

