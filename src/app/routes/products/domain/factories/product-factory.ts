import { Injectable } from "@angular/core";
import { Product, ProductEntity, Rating } from "../entities/product-entity";

@Injectable()
export class ProductFactory {

  createProduct(data: Partial<Product>): ProductEntity | null {
    if (!this.isValidProductData(data)) {
      // Puedes manejar el error de alguna manera o simplemente devolver null.
      return null;
    }

    const productEntity: ProductEntity = {
      id: data.id || 0,
      title: data.title || '',
      price: data.price || 0,
      description: data.description || '',
      category: data.category || '',
      image: data.image || '',
      rating: this.createRating(data.rating)
    };

    return productEntity;
  }

  private isValidProductData(data: Partial<Product>): boolean {
    if (!data) {
      return false;  // Si no hay datos, la validación falla
    }

    if (!data.title || typeof data.title !== 'string') {
      return false;  // El título debe ser una cadena no vacía
    }

    if (data.price === undefined || typeof data.price !== 'number' || data.price <= 0) {
      return false;  // El precio debe ser un número mayor que cero
    }

    if (!data.category || typeof data.category !== 'string') {
      return false;  // La categoría debe ser una cadena no vacía
    }

    return true;  // Si pasa todas las validaciones, los datos son válidos
  }


  private createRating(ratingData?: Partial<Rating>): Rating {
    return {
      rate: ratingData?.rate || 0,
      count: ratingData?.count || 0
    };
  }

}

