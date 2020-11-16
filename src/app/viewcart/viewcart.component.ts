import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  currentcart;
  total : number = 0;
  constructor(private cartserv : CartService) { }

  ngOnInit(): void {
    this.currentcart = this.cartserv.getCart();
    for(let i=0; i<this.currentcart.length; i++){
      this.total += this.currentcart[i].Current * this.currentcart[i].ProductPrice;
    }
  }

}
