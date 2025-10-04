import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sidevar } from './sidevar';

describe('Sidevar', () => {
  let component: Sidevar;
  let fixture: ComponentFixture<Sidevar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sidevar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sidevar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
