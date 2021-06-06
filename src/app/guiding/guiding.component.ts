import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-guiding',
  templateUrl: './guiding.component.html',
  styleUrls: ['./guiding.component.scss']
})
export class GuidingComponent {

  constructor(private dialogRef: MatDialogRef<GuidingComponent>) { }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
