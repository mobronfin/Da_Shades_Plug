import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemService } from '../item.service';
@Component({
  selector: 'app-item-update',
  templateUrl: './item.update.component.html',
  styleUrls: ['./item.update.component.css']
})
export class ItemUpdateComponent implements OnInit {
  itemRef = new FormGroup({
    _id:new FormControl(),
    name:new FormControl(),
    price:new FormControl()
  });

  constructor(public itemService:ItemService) { }
  result:string;
  ngOnInit(): void {
  }
updateItemDetails(){
this.itemService.updateItemDetailsFromDb(this.itemRef.value).subscribe(data=>this.result=data.msg)
}
}
