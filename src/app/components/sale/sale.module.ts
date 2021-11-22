import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale/sale.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SaleComponent}
    ])
  ]
})
export class SaleModule { }
