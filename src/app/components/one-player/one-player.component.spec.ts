import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnePlayerComponent } from './one-player.component';

describe('OnePlayerComponent', () => {
  let component: OnePlayerComponent;
  let fixture: ComponentFixture<OnePlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnePlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnePlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
