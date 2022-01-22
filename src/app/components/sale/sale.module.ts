import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './sale/sale.component';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    NgSelectModule,
    RouterModule.forChild([
      {path: '', component: SaleComponent}
    ])
  ]
})
export class SaleModule { }
