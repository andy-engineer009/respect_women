import { Routes } from '@angular/router';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'', pathMatch:'full'
    },
    {
        path: '',
        component: MainLayoutComponent,
        loadChildren: () => import('./features/main/main.routes').then(m => m.MAIN_ROUTES),
      },
      {
        path: 'auth',
        component: AuthLayoutComponent,
        children: [
          // Future login, signup, etc.
        ],
      },
];
