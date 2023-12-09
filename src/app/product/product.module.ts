import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './product-admin/product-admin.component';
import { ProductsComponent } from './products/products.component';
import { TableModule } from 'primeng/table';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { BaseModule } from 'app/base/base.module';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ProductAdminComponent, ProductsComponent],
  imports: [
  CommonModule,
    TableModule,
    HttpClientModule,
    ButtonModule,
    CardModule,
    BaseModule,
    DataViewModule,
    RatingModule,
    TagModule,
    DropdownModule,
    FormsModule,
    InputTextModule],

  exports: [ProductAdminComponent, ProductsComponent],
  providers:[
    ProductsService,
  ]
})
export class ProductModule { }
