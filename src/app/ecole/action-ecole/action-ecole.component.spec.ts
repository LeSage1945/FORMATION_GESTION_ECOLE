import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionEcoleComponent } from './action-ecole.component';

describe('ActionEcoleComponent', () => {
  let component: ActionEcoleComponent;
  let fixture: ComponentFixture<ActionEcoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionEcoleComponent]
    });
    fixture = TestBed.createComponent(ActionEcoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
