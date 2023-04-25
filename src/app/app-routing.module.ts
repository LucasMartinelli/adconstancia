import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageRoutes } from './shared/enums/page-routes.enum';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    data: { animation: 'home' },
  },
  {
    path: PageRoutes.QUEM_SOMOS,
    loadChildren: () =>
      import('./pages/about-us/about-us.module').then((m) => m.AboutUsModule),
    data: { animation: PageRoutes.QUEM_SOMOS },
  },
  {
    path: PageRoutes.DEPARTAMENTOS,
    loadChildren: () =>
      import('./pages/departments/departments.module').then(
        (m) => m.DepartmentsModule
      ),
    data: { animation: PageRoutes.DEPARTAMENTOS },
  },
  {
    path: PageRoutes.CONTATO,
    loadChildren: () =>
      import('./pages/contact/contact.module').then((m) => m.ContactModule),
    data: { animation: PageRoutes.CONTATO },
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
