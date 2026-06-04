import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewer } from './card-viewer';

describe('CardViewer', () => {
  let component: CardViewer;
  let fixture: ComponentFixture<CardViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardViewer],
    }).compileComponents();

    fixture = TestBed.createComponent(CardViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
