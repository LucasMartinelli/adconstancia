import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { AboutUsRoutingModule } from './about-us-routing.module';

@NgModule({
  imports: [CommonModule, AboutUsRoutingModule, SharedModule],
  declarations: [AboutUsPageComponent],
})
export class AboutUsModule {}
