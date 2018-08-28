import { Component, OnInit, Input } from '@angular/core';

import { LineItem } from './inventory.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  CartItems: LineItem[] = [];

  constructor() { }

  ngOnInit() {
  }
  RemoveItem(itemRemoved:number){
    console.log("remove this item -", this.CartItems[itemRemoved].label);
    this.CartItems.splice(itemRemoved,1);
  }
}
