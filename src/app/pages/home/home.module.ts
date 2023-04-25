import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [CommonModule, HomeRoutingModule, SharedModule, NgbCarouselModule],
  declarations: [HomePageComponent, CarouselComponent],
})
export class HomeModule {}
