import { Injectable } from '@angular/core';
import {MatSnackBar, MatSnackBarConfig} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, snackbarType: string): any {
    this.snackBar.open(message, 'close', {
      duration: 3000,
      panelClass: snackbarType,
    });
  }
}
