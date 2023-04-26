import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() openMenu = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit() {}

  dispatchOpenMenu() {
    this.openMenu.emit(true);
  }
}
