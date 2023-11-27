import { Inject, Injectable, inject } from "@angular/core";
import { ProductInfrastructure } from "../infrastructure/product-infrastructure";
import { ProductRepository } from "../domain/repositories/product-repository";
import { ProductEntity } from "../domain/entities/product-entity";
import { Observable } from "rxjs";

@Injectable()
export class ProductApplication {

  constructor(@Inject(ProductInfrastructure) private readonly productRepository: ProductRepository) {}

  list() {
    return this.productRepository.list();
  }

  add (productEntity: Partial<ProductEntity>) {
    return this.productRepository.add(productEntity);
  }

  update(id: number, entity: any): Observable<ProductEntity> {
    return this.productRepository.update(id, entity);
  }

  delete(id: number) {
    return this.productRepository.delete(id);
  }

}
