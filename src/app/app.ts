import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header-component/header-component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',

  standalone: true,

  imports: [
    RouterOutlet,
    HeaderComponent,
    FormsModule
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

}