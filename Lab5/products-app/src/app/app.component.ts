import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategory?: Category;

  selectCategory(category: Category): void {
    this.selectedCategory = category;
  }
  activeCategoryIndex: number | null = null;

  toggleCategory(index: number): void {
    this.activeCategoryIndex = this.activeCategoryIndex === index ? null : index;
  }
}
