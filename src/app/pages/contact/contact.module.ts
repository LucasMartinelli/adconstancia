import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './contact-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {
  IConfig,
  NgxMaskDirective,
  NgxMaskPipe,
  provideEnvironmentNgxMask,
} from 'ngx-mask';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  declarations: [ContactPageComponent],
  providers: [provideEnvironmentNgxMask()],
})
export class ContactModule {}
