import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
	{ path: '', component: ItemComponent },
	{ path: 'items', component: ItemComponent },
	{ path: 'cart', component: CartComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
