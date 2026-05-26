import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreHeader } from './core-header';

describe('CoreHeader', () => {
  let component: CoreHeader;
  let fixture: ComponentFixture<CoreHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
