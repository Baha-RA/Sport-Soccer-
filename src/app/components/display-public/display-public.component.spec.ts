import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayPublicComponent } from './display-public.component';

describe('DisplayPublicComponent', () => {
  let component: DisplayPublicComponent;
  let fixture: ComponentFixture<DisplayPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
