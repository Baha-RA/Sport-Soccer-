import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicComponent } from './add-public.component';

describe('AddPublicComponent', () => {
  let component: AddPublicComponent;
  let fixture: ComponentFixture<AddPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
