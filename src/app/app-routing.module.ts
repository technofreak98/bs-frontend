import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'inventory', loadChildren: () => import('./components/inventory/inventory.module').then(m => m.InventoryModule)},
  {path: 'customer', loadChildren: () => import('./components/customer/customer/customer.module').then(m => m.CustomerModule)},
  {path: 'sale', loadChildren: () => import('./components/sale/sale.module').then(m => m.SaleModule)},
  {path: '', redirectTo: 'inventory', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
