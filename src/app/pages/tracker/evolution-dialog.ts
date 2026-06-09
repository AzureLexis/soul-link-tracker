import { Component, Inject } from '@angular/core';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { Pokemon } from '../../services/pokemon-list-provider';

export interface EvolutionDialogData {
  title?: string;
  message?: string;
  options: Array<Pokemon>;
}

@Component({
  standalone: true,
  selector: 'app-evolution-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule,
  ],
  template: `
    <h2 mat-dialog-title>{{ data.title || 'Choose evolution' }}</h2>
    <div mat-dialog-content>
      @if (data.message) {
        <p>{{ data.message }}</p>
      }
      <div class="evolution-options">
        @for (option of data.options; track option.id) {
          <button mat-raised-button class="evolution-option-button" (click)="onOptionClick(option.id)">
            <span class="evolution-option-name">{{ option.name }}</span>
            <span class="evolution-option-types inline-block">
              <div class="width-45 text-center evolution-option-type-style inline-block type-{{option.type1}}">
                {{ option.type1 }}
              </div>
              <div class="width-45 text-center evolution-option-type-style inline-block type-{{option.type2}}">
                {{ option.type2 }}
              </div>
            </span>
          </button>
        }
      </div>
    </div>
    <div mat-dialog-actions align="end">
      <button mat-button (click)="onCancelClick()">Cancel</button>
    </div>
  `,
  styles: [`
    .evolution-options {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin: 20px;
      min-width: 300px;
    }

    .evolution-option-button {
      width: 100%;
      height: auto;
      padding: 8px 12px;
    }

    .evolution-option-button ::ng-deep .mdc-button__label {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      gap: 12px;
    }

    .evolution-option-name {
      text-align: left;
    }

    .evolution-option-types {
      width: 140px;
      flex-shrink: 0;
    }

    .evolution-option-type-style {
      border-radius: 10px;
      margin: 0px 2px;
    }
  `],
})
export class EvolutionDialog {
  constructor(
    public dialogRef: MatDialogRef<EvolutionDialog>,
    @Inject(MAT_DIALOG_DATA) public data: EvolutionDialogData,
  ) {}

  public onOptionClick(pokemonId: number): void {
    this.dialogRef.close(pokemonId);
  }

  public onCancelClick(): void {
    this.dialogRef.close(null);
  }
}
