import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckViewer } from './deck-viewer';

describe('DeckViewer', () => {
  let component: DeckViewer;
  let fixture: ComponentFixture<DeckViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeckViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(DeckViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
