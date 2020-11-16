import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemRetrieveComponent } from './item-retreive/item.retreive.component';
import { ItemRetrieveByIdComponent } from './item.retreive.id/item.retreive.id.component';
import { ItemStoreComponent } from './item.store/item.store.component';
import { ItemDeleteComponent } from './item-delete/item.delete.component';
import { ItemUpdateComponent } from './item-update/item.update.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ItemRetrieveComponent,
    ItemRetrieveByIdComponent,
    ItemStoreComponent,
    ItemDeleteComponent,
    ItemUpdateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
