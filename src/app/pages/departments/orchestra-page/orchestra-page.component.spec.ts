import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrchestraPageComponent } from './orchestra-page.component';

describe('OrchestraComponent', () => {
  let component: OrchestraPageComponent;
  let fixture: ComponentFixture<OrchestraPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrchestraPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrchestraPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
