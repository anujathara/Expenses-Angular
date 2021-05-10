import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogData } from 'src/app/models/expense.model';

@Component({
  selector: 'app-add-modify-expense',
  templateUrl: './add-modify-expense.component.html',
  styleUrls: ['./add-modify-expense.component.scss']
})
export class AddModifyExpenseComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddModifyExpenseComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
  }

}
