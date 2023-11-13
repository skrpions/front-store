import { Component, ViewChild, inject } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MaterialModule } from '../../../../shared/material.module';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { ProductApplication } from '../../application/product-application';
import { ProductEntity } from '../../domain/entities/product-entity';
import { FormProductComponent } from '../form-product/form-product.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [CommonModule, MaterialModule, NgOptimizedImage],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.scss'
})
export class ListProductsComponent {
  icon_header = 'add_shopping_cart';
  title_header = 'Products';
  //messages!: Messages;

  filterValue = '';
  totalRecords = 0;
  isAdministrator: boolean = false;

  dataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['id', 'picture', 'title', 'price', 'count', 'category', 'actions'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private readonly productApplication = inject(ProductApplication);
  public dialog = inject(MatDialog);
  //public toastr = inject(ToastrService);
  //private utilSrv = inject(UtilsService);

  ngOnInit(): void {
    this.getAll();
    //this.isAdministrator = this.utilSrv.isAdministrator();
  }

  getAll() {
    this.productApplication.list().subscribe({
      next: (rawData: any) => {
        this.processResponse(rawData);
      },
    });
  }

  processResponse(rawData: any) {

    if (!rawData) return;

    const data: ProductEntity[] = [];

    console.log('rawData', rawData);

    let listProducts = rawData;

    listProducts.forEach((product: ProductEntity) => {

      // Directly assign the imagebase 64 and category to each product.
      //product.picture = 'data:image/png;base64,' + product.picture;

      data.push(product);
    });

    this.dataSource = new MatTableDataSource<ProductEntity>(data);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.totalRecords = data.length;


  }

  applyFilter(event: Event) {

    this.filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = this.filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  openForm(enterAnimationDuration: string, exitAnimationDuration: string, row: any = null!) {

    const reference = this.dialog.open(FormProductComponent, {
      data: row,
      width: '750px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    reference.afterClosed().subscribe(response => {

      if (!response) return;

      const id: number = response.id;
      delete response.id;

      //const formData = this.createFormDataFromResponse(response);

      if (id) {
        // Update entity
        this.updateProduct(id, response);
      } else {
         // New entity
        this.addProduct(response);
      }
    });

  }

  /* private createFormDataFromResponse(response: any): FormData {

    const formData = new FormData();

    formData.append('name', response.name);
    formData.append('picture', response.picture);
    formData.append('price', response.price);
    formData.append('account', response.account);
    formData.append('categoryId', response.category);

    if (!(response.picture instanceof File)) {
      const picture: any = this.utilSrv.convertBase64ToFile(response.picture);
      formData.append('picture', picture);
    }

    return formData;
  } */

  private updateProduct(id: any, response: any) {

    console.log('To update ', response);


    /* this.productApplication.update(id, formData).subscribe({
      next: () => {
        this.utilSrv.handleSuccess('Updated');
        this.getAll();
      },
      error: () => {
        this.utilSrv.handleError('updating');
      }
    }); */

  }

  private addProduct(response: any) {

    console.log('To add', response);

    /* this.productApplication.add(formData).subscribe({
      next: () => {
        this.utilSrv.handleSuccess('Added');
        this.getAll();
      },
      error: () => {
        this.utilSrv.handleError('adding');
      }
    }); */

  }

  delete(enterAnimationDuration: string, exitAnimationDuration: string, row: any = null!) {

    /* const reference = this.dialog.open(ConfirmComponent, {
      data: row,
      width: '350px',
      enterAnimationDuration,
      exitAnimationDuration
    });

    reference.afterClosed().subscribe(response => {

      if (!response) return;

      this.productApplication.delete(row.id).subscribe({
        next: () => {

          this.utilSrv.handleSuccess('Deleted');
          this.getAll();
        },
      });

    }); */

  }

  /* exportToExcel() {

    this.productApplication.exportTotExcel().subscribe({

      next: (rawData: any) => {
        let file = new Blob([rawData], { type: 'application/vnd.ms-excel' });
        let fileURL = URL.createObjectURL(file);
        var anchor = document.createElement('a');
        anchor.download = "products.xlsx";
        anchor.href = fileURL;
        anchor.click();

        this.utilSrv.handleSuccess('Exported');
      }, error: () => {
        this.utilSrv.handleError('Exporting');
      }
    });
  } */

}
