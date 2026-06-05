import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLevelViewer } from './card-level-viewer';

describe('CardLevelViewer', () => {
  let component: CardLevelViewer;
  let fixture: ComponentFixture<CardLevelViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardLevelViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(CardLevelViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
