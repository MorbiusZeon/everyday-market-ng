import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryMenuComponent } from '../category-menu-component/category-menu-component';

@Component({
  selector: 'app-products-page-component',
  standalone: true,
  imports: [CategoryMenuComponent],
  templateUrl: './products-page-component.html',
  styleUrl: './products-page-component.css'
})
export class ProductsPageComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Gaming',
      imageUrl: '/images/gaming.jpg'
    },
    {
      id: 2,
      name: 'Music',
      imageUrl: '/images/music.jpg'
    },
    {
      id: 3,
      name: 'Sports',
      imageUrl: '/images/sports.jpg'
    },
    {
      id: 4,
      name: 'Technology',
      imageUrl: '/images/technology.jpg'
    },
    {
      id: 5,
      name: 'Software',
      imageUrl: '/images/software.jpg'
    }
  ];

  onCategorySelected(category: Category) {
    alert('You selected : ' + category.name);
  }
}
