import { Component, OnInit } from '@angular/core';
import { ProductsService, Product} from './../products.service';



@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.scss']
})
export class ProductAdminComponent implements OnInit {
  products : any[];
  breadcrumb : []
  
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList(){
    this.service.getProductList().subscribe(response => this.products = response['data'])
  }

  addNew(){
    console.log("Add a new product")
  }

  toggleCheck(prod : any){
    console.log("Check Toggled" + prod.id)
  }

  editProduct(prod : any){
    console.log("Edit Product")
  }

  deleteProduct(prod){
    console.log("Delete Product")
    // this.service.deleteProduct(prod.id).subscribe(response =>{
    //   let index = this.products.indexOf(prod);
    //   this.products.splice(index,1)
    // })
  }

  createProduct(input :HTMLInputElement){
    console.log("Create Product")
    // let product : any = {name:input.value}
    // input.value = ''

    // this.service.createProduct(product).subscribe(response => {
    //   product['id']=response['id'];
    //   this.products.splice(0,0,product)
    // })
  }
}
