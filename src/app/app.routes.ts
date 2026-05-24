import { Routes } from '@angular/router';

import { RegisterPageComponent } from './market/register-page/register-page';
import { ProductsPageComponent } from './market/products-page-component/products-page-component';

export const routes: Routes = [

  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full'
  },

  {
    path: 'register',
    component: RegisterPageComponent
  },

  {
    path: 'products',
    component: ProductsPageComponent
  }

];