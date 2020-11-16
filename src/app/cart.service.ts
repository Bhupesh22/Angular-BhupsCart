import { Injectable } from '@angular/core';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart : Product[] = [] ;

  constructor() { }

  public setCartItem(item : Product){
    let idx = item['ProductId'];
    if(this.cart.find(p=>p.ProductId == idx)){
      item.Current += 1;
    }else{
      item.Current = 1;
      this.cart.push(item);
    }
    console.log(this.cart);
    
  }
  public getCart(){
    return this.cart;
  }
  public clearCart(){
    return this.cart.splice(0, this.cart.length);
  }

}
