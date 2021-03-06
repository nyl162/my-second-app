import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

export interface LineItem{
  label: string;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  //Hardcoded - inventory list
  inventory: LineItem[] = [
    {label: "Acron Squash" , image: "acorn_squash.png", quantity: 10},
    {label: "Apple" , image: "apple.png", quantity: 2},
    {label: "BlurBerries" , image: "blueberries.png", quantity: 20},
    {label: "Carrot" , image: "carrot.png", quantity: 108},
    {label: "Hei! Harold" , image: "harold.png", quantity: 1},
    {label: "Coconut" , image: "tomato.png", quantity: 1000}
  ];

  @Output()
  itemSelected = new EventEmitter<LineItem>();

  constructor() { }

  ngOnInit() {
  }
  AddItem(selectIndex : number){
    console.log("Item : " + this.inventory[selectIndex].label);
    //Fire and event - itemSelected
    this.inventory[selectIndex].quantity--;
    //let newItem: LineItem = Object.assign({},this.inventory[selectIndex]);
    //newItem.quantity = 1;
    this.itemSelected.next(this.inventory[selectIndex]);
  }
/*
  AddItem(selectIndex : number){
    console.log("Item : " + this.inventory[selectIndex].label);
    //Fire and event - itemSelected
    this.inventory[selectIndex].quantity--;
    let newItem: LineItem = Object.assign({},this.inventory[selectIndex]);
    newItem.quantity = 1;
    this.itemSelected.next(newItem);
  }
  */
}
