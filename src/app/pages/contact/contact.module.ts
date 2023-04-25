import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  imports: [CommonModule, ContactRoutingModule, SharedModule],
  declarations: [ContactPageComponent],
})
export class ContactModule {}
