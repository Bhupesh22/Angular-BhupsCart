import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product : Product[] = [
    {ProductId: 101, ProductName : "KeyBoard", ProductPrice : 700, ProductQuantity : 20, ProductImage :'./assets/Keyboard.jfif'},
    {ProductId: 102, ProductName : "Wireless Mouse", ProductPrice : 200, ProductQuantity : 15, ProductImage :'./assets/Mouse.jfif'},
    {ProductId: 103, ProductName : "Monitor", ProductPrice : 300, ProductQuantity : 20, ProductImage:'./assets/Monitor.jfif'},
    {ProductId: 104, ProductName : "iPhone 12", ProductPrice : 1400, ProductQuantity : 10, ProductImage:'./assets/iphone.jfif'},
    {ProductId: 105, ProductName : "Samsung s20", ProductPrice : 900, ProductQuantity : 14, ProductImage:'./assets/Samsung.jfif'},
    {ProductId: 106, ProductName : "Redmi 9", ProductPrice : 90, ProductQuantity : 19, ProductImage:'./assets/Redmi.jfif'},
    {ProductId: 107, ProductName : "MI 32 LED TV", ProductPrice : 400, ProductQuantity : 2, ProductImage:'./assets/Mi.jfif'},
    {ProductId: 108, ProductName : "iPhone 11", ProductPrice : 800, ProductQuantity : 24, ProductImage:'./assets/iphone11.jfif'},
    {ProductId: 109, ProductName : "Dell inspiron", ProductPrice : 600, ProductQuantity : 18, ProductImage:'./assets/Dell.jfif'},
    {ProductId: 110, ProductName : "Lenovo Ideapad", ProductPrice : 500, ProductQuantity : 12, ProductImage:'./assets/Lenovo.jfif'}
  ]
  
  constructor(private cart : CartService, private router : Router) { }

  ngOnInit(): void {
  }

  addtocart(id){
    //console.log(id);
    if(sessionStorage.getItem('email')){
      for(let i = 0; i<this.product.length; i++){
        if(this.product[i].ProductId == id && this.product[i].ProductQuantity > 0){
          this.cart.setCartItem(this.product[i]);
          this.product[i].ProductQuantity --;
        }
      }
    }else{
      this.router.navigate(['login']);
    }
    
  }
}
