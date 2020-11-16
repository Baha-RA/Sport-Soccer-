import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicsComponent } from './publics.component';

describe('PublicsComponent', () => {
  let component: PublicsComponent;
  let fixture: ComponentFixture<PublicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
