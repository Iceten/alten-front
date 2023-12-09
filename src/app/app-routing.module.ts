import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductAdminComponent } from './product/product-admin/product-admin.component';
import { ProductsComponent } from './product/products/products.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';

const routes: Routes = [
  {
    path: 'admin/products',
    component: ProductAdminComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],exports: [RouterModule],
})



export class AppRoutingModule {}
