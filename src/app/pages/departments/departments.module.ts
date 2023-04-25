import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentsPageComponent } from './departments-page/departments-page.component';
import { EbdPageComponent } from './ebd-page/ebd-page.component';
import { MissionPageComponent } from './mission-page/mission-page.component';
import { DepartmentsRoutingModule } from './departments-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ChildrenPageComponent } from './children-page/children-page.component';
import { ChoralPageComponent } from './choral-page/choral-page.component';
import { TeenagersPageComponent } from './teenagers-page/teenagers-page.component';
import { WomenPageComponent } from './women-page/women-page.component';
import { YoungPageComponent } from './young-page/young-page.component';

@NgModule({
  imports: [CommonModule, DepartmentsRoutingModule, SharedModule],
  declarations: [
    DepartmentsPageComponent,
    EbdPageComponent,
    MissionPageComponent,
    ChildrenPageComponent,
    ChoralPageComponent,
    TeenagersPageComponent,
    WomenPageComponent,
    YoungPageComponent,
  ],
})
export class DepartmentsModule {}
