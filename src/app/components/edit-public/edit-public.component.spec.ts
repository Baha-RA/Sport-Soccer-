import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPublicComponent } from './edit-public.component';

describe('EditPublicComponent', () => {
  let component: EditPublicComponent;
  let fixture: ComponentFixture<EditPublicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPublicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
