import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  //private _snackBar = inject(MatSnackBar);

  handleSuccess(action: string) {
    /* this._snackBar.open(`✔ Ok, ${action}`, '', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: this.durationInSeconds * 1000,
      panelClass: ['green-snackbar'],
    }); */

  }

  handleError(action: string) {
    /* this._snackBar.open(`❌ Error ${action}`, '', {
      verticalPosition: 'top',
      horizontalPosition: 'center',
      duration: this.durationInSeconds * 1000,
      panelClass: ['red-snackbar'],
    });
    console.log(`Error ${action}`); */
  }
}
