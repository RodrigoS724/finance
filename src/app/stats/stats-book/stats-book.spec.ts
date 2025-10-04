import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsBook } from './stats-book';

describe('StatsBook', () => {
  let component: StatsBook;
  let fixture: ComponentFixture<StatsBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatsBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
