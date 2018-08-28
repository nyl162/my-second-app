import { Component ,Output , EventEmitter} from '@angular/core';
import { LineItem } from './components/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
export interface CartItem{
  label: string;
  image: string;
}
*/
export class AppComponent {
  title = 'my-second-app';

  itemlist: LineItem[] = [];

  AddItem(item: LineItem){
    console.log('>>>>>> new item: ', item);
    this.itemlist.push(item);
    //this.addToCart.next(this.itemlist);
  }
}
