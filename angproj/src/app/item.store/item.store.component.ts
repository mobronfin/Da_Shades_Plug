import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-store',
  templateUrl: './item.store.component.html',
  styleUrls: ['./item.store.component.css']
})
export class ItemStoreComponent implements OnInit {
itemRef = new FormGroup({
  _id:new FormControl(),
  name:new FormControl(),
  price:new FormControl()
});
  constructor(public productService:ItemService) { }//DI for Service layer
  result:string;
  ngOnInit(): void {
  }

  storeProductDetails(): void {
    //console.log(this.productRef.value);
    this.productService.storeItemDetailsInDb(this.itemRef.value).
    subscribe(data=>this.result=data.msg)
  }
}
