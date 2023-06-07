import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorSignInComponent } from './visitor-sign-in.component';

describe('VisitorSignInComponent', () => {
  let component: VisitorSignInComponent;
  let fixture: ComponentFixture<VisitorSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitorSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
