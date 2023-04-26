import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MobileMenuComponent } from './layout/mobile-menu/mobile-menu.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [HeaderComponent, FooterComponent, MobileMenuComponent],
  exports: [HeaderComponent, FooterComponent, MobileMenuComponent],
})
export class CoreModule {}
