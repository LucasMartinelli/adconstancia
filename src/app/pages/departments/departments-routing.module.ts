import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { EbdPageComponent } from './ebd-page/ebd-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { PageRoutes } from 'src/app/shared/enums/page-routes.enum';
import { ChoralPageComponent } from './choral-page/choral-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { YoungPageComponent } from './young-page/young-page.component';
import { TeenagersPageComponent } from './teenagers-page/teenagers-page.component';
import { ChildrenPageComponent } from './children-page/children-page.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsPageComponent,
  },
  {
    path: PageRoutes.EBD,
    component: EbdPageComponent,
  },
  {
    path: PageRoutes.MISSOES,
    component: MissionPageComponent,
  },
  {
    path: PageRoutes.INFANTIL,
    component: ChildrenPageComponent,
  },
  {
    path: PageRoutes.ADOLESCENTES,
    component: TeenagersPageComponent,
  },
  {
    path: PageRoutes.MOCIDADE,
    component: YoungPageComponent,
  },
  {
    path: PageRoutes.CIRCULO_ORACAO,
    component: WomenPageComponent,
  },
  {
    path: PageRoutes.CORAL,
    component: ChoralPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
