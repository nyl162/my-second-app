import { Component ,Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-second-app';

  itemlist: string[] = [];

  newItem(item: string){
    console.log('>>>>>> new item: ', item);
    this.itemlist.push(item);
    //this.addToCart.next(this.itemlist);
  }
}
