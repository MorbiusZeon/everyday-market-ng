import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


import { HeaderComponent } from './shared/header-component/header-component';
import { ProductsPageComponent } from './market/products-page-component/products-page-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ProductsPageComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
