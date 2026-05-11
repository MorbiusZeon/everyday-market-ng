import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';



import { Category } from '../models/category';
import { CategoryMenuItemComponent } from '../category-menu-item-component/category-menu-item-component';



@Component({
  selector: 'app-category-menu-component',
  standalone: true,
  imports: 
  [
    CommonModule,
    CategoryMenuItemComponent
  ],
  
  templateUrl: './category-menu-component.html',
  styleUrls: ['./category-menu-component.css']

})


export class CategoryMenuComponent {

  @Input()
  categories: Category[] = [];

  @Output()
  categorySelected = new EventEmitter<Category>();

  onItemClicked(category: Category) {
    this.categorySelected.emit(category);

  }
}
