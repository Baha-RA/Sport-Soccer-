import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCupComponent } from './word-cup.component';

describe('WordCupComponent', () => {
  let component: WordCupComponent;
  let fixture: ComponentFixture<WordCupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
