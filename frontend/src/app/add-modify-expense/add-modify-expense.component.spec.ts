import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifyExpenseComponent } from './add-modify-expense.component';

describe('AddModifyExpenseComponent', () => {
  let component: AddModifyExpenseComponent;
  let fixture: ComponentFixture<AddModifyExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModifyExpenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModifyExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
