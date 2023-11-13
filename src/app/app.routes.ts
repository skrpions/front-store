import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/views/login/login.component';
import { HomeComponent } from './routes/dashboard/components/home/home.component';
import { DashboardComponent } from './routes/dashboard/views/dashboard/dashboard.component';
import { ListProductsComponent } from './routes/products/views/list-products/list-products.component';
import { ListCategoriesComponent } from './routes/categories/views/list-categories/list-categories.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard', // (Private) 🚷 Dashboard ...
    component: DashboardComponent,
    //canActivate: [authenticationGuard],
    children:[
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ListProductsComponent
      },
      {
        path: 'categories',
        component: ListCategoriesComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/'
  }
];
