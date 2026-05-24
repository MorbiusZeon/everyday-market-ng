import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-menu-item-component',
  standalone: true,
  imports: [],
  templateUrl: './category-menu-item-component.html',
  styleUrls: ['./category-menu-item-component.css'],
})


export class CategoryMenuItemComponent 
{

  @Input()
  categoryName = '';

  @Input()
  categoryImage = '';

  @Output()
  itemclicked = new EventEmitter();

  onItemclicked() {
    this.itemclicked.emit(this.categoryName);
  }
} 

