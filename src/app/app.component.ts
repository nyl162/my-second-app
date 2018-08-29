import { Component} from '@angular/core';
import { LineItem } from './components/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'my-second-app';

  itemlist: LineItem[] = [];
  stagginglist: LineItem[] = [];

  AddItem(item: LineItem){
//[2, 5, 8, 1, 4].some(x => x > 10);  // false

    //let newItem: LineItem = Object.assign({},item);
    console.log(this.itemlist.findIndex(x => x.label == item.label));
    console.log('>>>>>> new item: ', item);

    let index : number = this.itemlist.findIndex(x => x.label == item.label)
    let newItem: LineItem = Object.assign({},item);
    //if (this.itemlist.some(x => x.label == newItem.label)){
    if (index < 0 ){
      newItem.quantity = 1;
      this.itemlist.push(newItem);
      this.stagginglist.push(item);
    }else{
      this.itemlist[index].quantity++;
    }

    //this.addToCart.next(this.itemlist);
  }
  /*
  AddItem(item: LineItem){
    //[2, 5, 8, 1, 4].some(x => x > 10);  // false
    
        //let newItem: LineItem = Object.assign({},item);
        console.log(this.itemlist.findIndex(x => x.label == item.label));
        console.log('>>>>>> new item: ', item);
    
        let index : number = this.itemlist.findIndex(x => x.label == item.label)
    
        //if (this.itemlist.some(x => x.label == newItem.label)){
        if (index < 0 ){
          item.quantity = 1;
          this.itemlist.push(item);
        }else{
          this.itemlist[index].quantity++;
        }
    
        //this.addToCart.next(this.itemlist);
      }
      */
  ReturnItem(ReturnItem: string){
    console.log('>>>>>> Return item: ', ReturnItem);
    
    let index2 : number = this.stagginglist.findIndex(x => x.label == ReturnItem)
    
    console.log('>>staginglistIndex: ', index2);

      this.stagginglist[index2].quantity++;
      
    console.log('>>increse: '+ ReturnItem + ' to ('+this.stagginglist[index2].quantity+ ')' );
  
  }
}
