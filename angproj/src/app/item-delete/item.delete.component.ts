import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-delete',
  templateUrl: './item.delete.component.html',
  styleUrls: ['./item.delete.component.css']
})
export class ItemDeleteComponent implements OnInit {

  constructor(public itemService:ItemService) { }
  result:string;
  ngOnInit(): void {
  }

  deleteItem(itemId){
    this.itemService.deleteItemById(itemId).
    subscribe(data=>this.result=data.msg);
  }
}
