import { ProductFactory } from './product-factory';

describe('ProductFactory', () => {
  it('should create an instance', () => {
    expect(new ProductFactory()).toBeTruthy();
  });
});
