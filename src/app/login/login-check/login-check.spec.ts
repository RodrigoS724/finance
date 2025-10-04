import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCheck } from './login-check';

describe('LoginCheck', () => {
  let component: LoginCheck;
  let fixture: ComponentFixture<LoginCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
