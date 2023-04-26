import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent implements OnInit {
  @Input() mobileMenuOpen: boolean = false;

  @Output() closeMenu = new EventEmitter<boolean>();

  showDepts: boolean = false;

  constructor() {}

  ngOnInit() {}

  dispatchCloseMenu(showDeptsMenu = false) {
    this.showDepts = showDeptsMenu;
    this.closeMenu.emit(false);
  }
  deptsToggle() {
    this.showDepts = !this.showDepts;
  }
}
