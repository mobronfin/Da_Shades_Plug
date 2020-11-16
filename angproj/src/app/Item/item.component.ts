import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
	templateUrl: 'item.component.html'
})

export class ItemComponent implements OnInit {

	items: Item[];

	constructor(
		private itemService: ItemService
	) { }

	ngOnInit() {
		console.log(this.itemService.findAll())
		this.items = this.itemService.findAll();
	}


}
