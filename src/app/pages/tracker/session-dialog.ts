import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { v4 as uuidv4 } from 'uuid';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

export interface SessionDialogData {
  sessionId: string;
}

@Component({
  standalone: true,
  selector: 'app-session-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FormsModule
  ],
  template: `
    <h2 mat-dialog-title>Connect to session?</h2>
    <div mat-dialog-content>
      <mat-form-field>
          <mat-label>Enter session id</mat-label>
          <input matInput type="text" [(ngModel)]="sessionId">
      </mat-form-field>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancelClick()">
        Cancel
      </button>
      <button mat-raised-button color="warn" (click)="onConfirmClick()">
        <mat-icon class="mr-1">connect_without_contact</mat-icon>
        Connect
      </button>
    </div>
  `,
})
export class SessionDialog {

  public sessionId : string = '';

  constructor(
    public dialogRef: MatDialogRef<SessionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: SessionDialogData,
  ) {
    if(data.sessionId !== ''){
      this.sessionId = data.sessionId;
    }else{
      this.sessionId = uuidv4();
    }
  }

  public onCancelClick(): void {
    this.dialogRef.close(false);
  }

  public onConfirmClick(): void {
    this.dialogRef.close(this.sessionId);
  }
}

