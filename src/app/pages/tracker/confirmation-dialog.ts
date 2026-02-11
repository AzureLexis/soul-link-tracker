import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface ConfirmationDialogData {
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
  icon?: string;
}

@Component({
  standalone: true,
  selector: 'app-confirmation-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data.title || 'Confirm' }}</h2>
    <div mat-dialog-content>
      <p>{{ data.message || 'Are you sure?' }}</p>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancelClick()">
        {{ data.cancelText || 'Cancel' }}
      </button>
      <button mat-raised-button color="warn" (click)="onConfirmClick()">
        <mat-icon class="mr-1">{{ data.icon || 'delete' }}</mat-icon>
        {{ data.confirmText || 'Delete' }}
      </button>
    </div>
  `,
})
export class ConfirmationDialog {
  constructor(
    public dialogRef: MatDialogRef<ConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationDialogData,
  ) {}

  public onCancelClick(): void {
    this.dialogRef.close(false);
  }

  public onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}

