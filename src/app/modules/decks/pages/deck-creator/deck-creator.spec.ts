import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckCreator } from './deck-creator';

describe('DeckCreator', () => {
  let component: DeckCreator;
  let fixture: ComponentFixture<DeckCreator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckCreator],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckCreator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
