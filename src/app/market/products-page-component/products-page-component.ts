import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Category } from '../models/category';  
import { CategoryMenuComponent } from '../category-menu-component/category-menu-component';



@Component
({
  selector: 'app-products-page-component',
  standalone: true,
  imports: [CommonModule, CategoryMenuComponent],
  
  templateUrl: './products-page-component.html',
  styleUrl: './products-page-component.css'
})

export class ProductsPageComponent {
  categories: Category[] = [
    {
      id: 1,
      name: 'Gaming',
      image : 'assets/images/gaming.jpg'
    },

    {
      id: 2,
      name: 'Music',
      image : 'assets/images/music.jpg'

    },

    {
      id: 3,
      name: 'Sports',
      image : 'assets/images/sports.jpg'
    },

    {
      id: 4,
      name: 'Technology',
      image : 'assets/images/technology.jpg'
    },

    {
      id: 5,
      name: 'Software',
      image : 'assets/images/software.jpg'
    }
  ];

 onCategorySelected(category: Category) {
   alert('You selected : ' + category.name);
}
}
