import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-retrieve',
  templateUrl: './item.retreive.component.html',
  styleUrls: ['./item.retreive.component.css']
})
export class ItemRetrieveComponent implements OnInit {
  items:Array<Item>;
  //products:Product[];
  flag : boolean = false;
  constructor(public itemService:ItemService) { } //DI for Service class

  ngOnInit(): void {
  }

  loadItemInfo(): void {
    this.flag = true;
    this.itemService.getAllItemDetails().subscribe(data=>this.items=data);
  }
}



