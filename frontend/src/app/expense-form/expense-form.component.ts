import { Component, OnInit } from '@angular/core';
import { MatButtonToggleGroup } from '@angular/material/button-toggle';
import { Expense } from 'src/app/models/expense.model';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnInit {
  displayedColumns: string[] = [];
  dataSource: Expense[] = [];

  tables = [0];

  constructor(private ExpenseService: ExpenseService) {
    this.displayedColumns.length = 7;
    // this.displayedColumns.fill('filler');

    // The first two columns should be position and name; the last two columns: weight, symbol
    this.displayedColumns[0] = 'Date';
    this.displayedColumns[1] = 'Purpose';
    this.displayedColumns[2] = 'Category';
    this.displayedColumns[3] = 'Type';
    this.displayedColumns[4] = 'Description';
    this.displayedColumns[5] = 'Labour';
    this.displayedColumns[6] = 'Amount';
  }

  ngOnInit(): void {
    this.ExpenseService.loadData()
      .subscribe(
        response => {
          console.log(response);
          this.dataSource = response.recordset;
          // this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }


  /** Whether the button toggle group contains the id as an active value. */
  isSticky(buttonToggleGroup: MatButtonToggleGroup, id: string) {
    return (buttonToggleGroup.value || []).indexOf(id) !== -1;
  }
}