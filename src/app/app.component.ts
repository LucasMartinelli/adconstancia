import { Component } from '@angular/core';
import { LoaderService } from './core/services/loader.service';
import { ChildrenOutletContexts } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent {
  showMobileMenu = false;

  constructor(public loaderService: LoaderService) {}

  mobileMenuHandler($event: boolean) {
    console.log($event);
    this.showMobileMenu = $event;
  }
}
