/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YoungPageComponent } from './young-page.component';

describe('YoungPageComponent', () => {
  let component: YoungPageComponent;
  let fixture: ComponentFixture<YoungPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YoungPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YoungPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
