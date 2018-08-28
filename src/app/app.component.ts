import { Component ,Output , EventEmitter} from '@angular/core';
import { LineItem } from './components/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-second-app';

  itemlist: LineItem[] = [];

  AddItem(item: LineItem){
//[2, 5, 8, 1, 4].some(x => x > 10);  // false

    let newItem: LineItem = Object.assign({},item);
    console.log(this.itemlist.findIndex(x => x.label == newItem.label));
    console.log('>>>>>> new item: ', newItem);

    let index : number = this.itemlist.findIndex(x => x.label == newItem.label)

    //if (this.itemlist.some(x => x.label == newItem.label)){
    if (index < 0 ){
      newItem.quantity = 1;
      this.itemlist.push(newItem);
    }else{
      this.itemlist[index].quantity++;
    }

    //this.addToCart.next(this.itemlist);
  }

  ReturnItem(ReturnItem: string){
    console.log('>>>>>> Return item: ', ReturnItem);
  }
}
