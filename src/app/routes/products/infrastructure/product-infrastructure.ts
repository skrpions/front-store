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
}
