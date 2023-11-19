import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'app-confirm',
  standalone: true,
  imports: [CommonModule, MaterialModule],
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.scss'
})
export class ConfirmComponent {
  icon_header = 'notification_important';
  title_header = 'Elimination';

  messages: string[] = []; // ['¿Está seguro de eliminar el registro?', 'Juan Perez'];
  question: string = '¿Está seguro de eliminar el registro?'; // '¿Está seguro de eliminar el registro?';
  name = ''; // 'Juan Perez';

  //private data: CategoryEntity = inject(MAT_DIALOG_DATA);

  /* ngAfterContentInit(): void {
    console.log('row', this.data);

    this.name = this.data.name;
  } */
}
