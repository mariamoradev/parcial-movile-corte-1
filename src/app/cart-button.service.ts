import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartButtonService {
  public producOfcart: any[]=[];
  constructor() { }

  showProducOfCart(): any{
    return this.producOfcart;
  }

  addNewProductInCart(produc: any): void{
    this.producOfcart.push(produc);
  }
}
