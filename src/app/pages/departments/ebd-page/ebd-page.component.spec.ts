/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EbdPageComponent } from './ebd-page.component';

describe('EbdPageComponent', () => {
  let component: EbdPageComponent;
  let fixture: ComponentFixture<EbdPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbdPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
