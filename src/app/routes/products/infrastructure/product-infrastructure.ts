import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { Observable } from "rxjs";
import { ProductEntity } from "../domain/entities/product-entity";
import { environment } from "../../../../environments/environment.development";

@Injectable()
export class ProductInfrastructure {

  private http = inject(HttpClient);

  list(): Observable<ProductEntity[]> {
    return this.http.get<ProductEntity[]>(`${environment.apiPath}/products`);
  }

  add(entity: Partial<ProductEntity>): Observable<ProductEntity> {
    return this.http.post<ProductEntity>(`${environment.apiPath}/products`, entity);
  }

  update(id: string, entity: ProductEntity): Observable<ProductEntity> {
    return this.http.put<ProductEntity>(`${environment.apiPath}/products/${id}`, entity);
  }

  delete(id: string): Observable<any> {
    return this.http.delete<ProductEntity>(`${environment.apiPath}/products/${id}`);
  }

}
