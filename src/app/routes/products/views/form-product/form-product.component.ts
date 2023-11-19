import { Component, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MaterialModule } from '../../../../shared/material.module';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductEntity } from '../../domain/entities/product-entity';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PhotoComponent } from '../../../../shared/components/photo/photo.component';

@Component({
  selector: 'app-form-product',
  standalone: true,
  imports: [CommonModule, MaterialModule, NgOptimizedImage, ReactiveFormsModule, FormsModule,PhotoComponent],
  templateUrl: './form-product.component.html',
  styleUrl: './form-product.component.scss'
})
export class FormProductComponent {

  icon_header = '';
  title_header = '';
  reactiveForm!: FormGroup;
  photoToShow = '';
  listCategories: string[] = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing"];

  private fb = inject(FormBuilder);
  private data: ProductEntity = inject(MAT_DIALOG_DATA);
  private reference = inject(MatDialogRef);

  //private readonly categoryApplication = inject(CategoryApplication);

  ngOnInit(): void {

    this.icon_header = this.data ? 'edit' : 'add';
    this.title_header = this.data ? 'Edit' : 'New';

    this.getAllCategories();
    this.initForm();
  }

  private initForm(): void {
    this.reactiveForm = this.fb.nonNullable.group({
      id: this.data?.id,
      title: [this.data?.title, [Validators.required, Validators.minLength(2)]],
      price: [this.data?.price, [Validators.required, Validators.min(0)]],
      description: [this.data?.description, [Validators.required, Validators.minLength(0)]],
      category: [this.data?.category, [Validators.required]],
    });

    // Se agrega un control "image" solo si no hay datos en la variable "data".
    // De lo contrario, se agrega el control sin ninguna validación específica.
    if (this.data) {
      this.reactiveForm.addControl('image', new FormControl());
      this.photoToShow = this.data.image ? this.data.image : '';

      // Sobre-escribo la categoria con el id
      //this.reactiveForm.get('category')?.setValue(this.data.category.id);
      this.reactiveForm.get('image')?.setValue(this.data.image);

    } else {
      this.reactiveForm.addControl('image', new FormControl(null, Validators.required));
    }

    this.reactiveForm.valueChanges.subscribe(() => {
      console.log(this.reactiveForm.value);
    });

  }

  get titleField() {
    return this.reactiveForm.get('title');
  }

  get priceField() {
    return this.reactiveForm.get('price');
  }

  get descriptionField() {
    return this.reactiveForm.get('description');
  }

  get categoryField() {
    return this.reactiveForm.get('category');
  }

  getAllCategories() {
    /* this.categoryApplication.list().subscribe({
      next: (rawData: any) => {
        this.processResponse(rawData);
      },
    }); */
  }

  processResponse(rawData: any) {

    if(rawData.metadata[0].code === "200") {
      this.listCategories = rawData.categoryResponse.category;
    }

  }

  save() {
    if (this.reactiveForm.invalid) return this.reactiveForm.markAllAsTouched(); // Activate all errors

    const record: ProductEntity = this.reactiveForm.value;
    record.image = 'https://latit.co/wp-content/uploads/2021/05/1050707-1.jpg';

    this.reference.close(record);
  }

}
