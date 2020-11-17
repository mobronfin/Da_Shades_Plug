import { Injectable } from '@angular/core';

import { Item } from './item';

@Injectable()
export class ItemService {

    private items: Item[];

    constructor() {
        this.items = [
            { _id: '100', name: 'Harrison', price: 395},
            { _id: '100', name: 'Harrison1', price: 395},
            { _id: '100', name: 'Harrison2', price: 395}
        ];
    }

    findAll(): Item[] {
        return this.items;
    }

    find(_id: string): Item {
        return this.items[this.getSelectedIndex(_id)];
    }

    private getSelectedIndex(_id: string) {
        for (var i = 0; i < this.items.length; i++) {
            if (this.items[i]._id == _id) {
                return i;
            }
        }
        return -1;
    }

}
