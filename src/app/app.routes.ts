import { Routes } from '@angular/router';
import { LoginComponent } from './routes/auth/views/login/login.component';
import { DashboardComponent } from './routes/dashboard/views/dashboard/dashboard.component';
import { ListProductsComponent } from './routes/products/views/list-products/list-products.component';
import { ListCategoriesComponent } from './routes/categories/views/list-categories/list-categories.component';
import { loggedInGuard } from './core/guards/logged-in.guard';
import { AdminLayoutComponent } from './theme/admin-layout/admin-layout.component';

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
    component: AdminLayoutComponent,
    canActivate: [loggedInGuard],
    children:[
      {
        path: 'home',
        component: DashboardComponent
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
