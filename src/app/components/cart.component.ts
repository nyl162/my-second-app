import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

import { LineItem } from './inventory.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  CartItems: LineItem[] = [];

  @Output()
  itemReturn = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  RemoveItem(itemRemoved:number){
    console.log("remove this item -", this.CartItems[itemRemoved].label);
    if(this.CartItems[itemRemoved].quantity < 2 ){
      this.CartItems.splice(itemRemoved,1);
    }else{
      this.CartItems[itemRemoved].quantity--;
      this.itemReturn.next(this.CartItems[itemRemoved].label);
    }
  }
}
