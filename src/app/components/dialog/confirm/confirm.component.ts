import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<ConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  ngOnInit(): void {
  }

  closeDialog(): void {
    this.dialogo.close(false);
  }
  confirmDialog(): void {
    this.dialogo.close(true);
  }

}
