import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Auth } from './feature/auth/auth';

export const routes: Routes = [
  {
    path: 'login',
    component: Auth,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./feature/dashboard/dashboard').then((m) => m.Dashboard),
      },
      {
        path: 'staffs',
        children: [
          {
            path: 'list',
            loadComponent: () =>
              import('./feature/staff/staff-list/staff-list').then((m) => m.StaffList),
          },
          {
            path: 'form/:id',
            loadComponent: () =>
              import('./feature/staff/staff-form/staff-form').then((m) => m.StaffForm),
          },
        ],
      },
      {
        path: 'products',
        children: [
          {
            path: 'list',
            loadComponent: () =>
              import('./feature/product/product-list/product-list').then((m) => m.ProductList),
          },
          {
            path: 'form/:id',
            loadComponent: () =>
              import('./feature/product/product-form/product-form').then((m) => m.ProductForm),
          },
        ],
      },
      {
        path: 'categories',
        children: [
          {
            path: 'list',
            loadComponent: () =>
              import('./feature/category/category-list/category-list').then((m) => m.CategoryList),
          },
          {
            path: 'form/:id',
            loadComponent: () =>
              import('./feature/category/category-form/category-form').then((m) => m.CategoryForm),
          },
        ],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];
