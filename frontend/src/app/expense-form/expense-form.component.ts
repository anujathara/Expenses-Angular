import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnDestroy, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Menu } from 'src/app/models/expense.model';
import { AddModifyExpenseComponent } from 'src/app/add-modify-expense/add-modify-expense.component';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.scss']
})
export class ExpenseFormComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  fillerNav = Array('Add New', 'jkahsjkdhajskdh');

  menuItems: Menu[] = [
    { link: 'Add', name: 'Add New' },
    { link: 'Search', name: 'Search' },
  ];

  animal = 'Dhanu';
  name = 'Anu';

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  openDialog(link: any): void {
    const dialogRef = this.dialog.open(AddModifyExpenseComponent, {
      width: '250px',
      data: {name: link, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}