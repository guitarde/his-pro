import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  constructor(public dialogo: MatDialogRef<MessageComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }


  ngOnInit(): void {
  }

}
