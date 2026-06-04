import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckLists } from './deck-lists';

describe('DeckLists', () => {
  let component: DeckLists;
  let fixture: ComponentFixture<DeckLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckLists],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckLists);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
