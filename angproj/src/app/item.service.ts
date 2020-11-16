import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: "root"
})
export class ItemService {

  constructor(public httpClient:HttpClient) { }

  getAllItemDetails():Observable<Item[]> {
    return this.httpClient.get<Item[]>("mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority");
  }

  storeItemDetailsInDb(itemRef): Observable<any> {

 return this.httpClient.post("mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority",itemRef);

  }

  deleteItemById(itemId):Observable<any>{
  return this.httpClient.delete("mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority"+itemId);
  }

  updateItemDetailsFromDb(itemRef):Observable<any> {
    return this.httpClient.put("mongodb+srv://mbronfin789:Paymemoney2024%24@cluster0.hcy8i.mongodb.net/fashion?retryWrites=true&w=majority",itemRef);
  }
}
