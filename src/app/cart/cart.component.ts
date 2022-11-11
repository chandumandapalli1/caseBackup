import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, AfterContentChecked {
  cart = [];
   total: number;
  constructor(public service: DataService) { }
  quantity = 1;
  ngOnInit(): void {
    this.cart = this.service.order;
    console.log(this.cart);
  }
  inc(id): void {
    const index = this.cart.findIndex((element0) => element0.id === id);
    this.service.order[index].quantity++;
  }
  dec(id): void{
   const index = this.cart.findIndex((element1) => element1.id === id);
   if (this.cart[index].quantity > 1) {
    this.service.order[index].quantity--;
   }
    else {
    this.service.order.splice(index, 1);
   }
  }
  ngAfterContentChecked(): void {
    this.total = this.service.order.reduce((acc, element) =>
      acc = acc + (element.price * element.quantity), 0);
    }
    checkout(): void{
      this.service.order.splice(0);
    }
    delete(id): void{
      const index = this.cart.findIndex(( item) => item.id === id);
      this.service.order.splice(index, 1);
    }
   }
