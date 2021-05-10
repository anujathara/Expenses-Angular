export class Expense {
    Date?: Date;
    Purpose?: String;
    Category?: String;
    Type?: String;
    Description?: String;
    Labour?: Number;
    Amount?: Number;
}

export class Menu {
    link?: string;
    name?: string;
}

export interface DialogData {
    animal: string;
    name: string;
}