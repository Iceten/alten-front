import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductsService, Product} from './../products.service';
import { SelectItem, FilterService } from 'primeng/api';



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @ViewChild('dv') dataView: DataView;
  products : Product[];
  
  filteredProducts : Product[];
  filterChoice : string = 'name';
  filterValue: string = '';
  
  sortOptions!: SelectItem[];
  sortOrder!: number;
  sortField!: string;
  
  constructor(private service: ProductsService) {}

  ngOnInit(): void {
    this.getProductList();
    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
  ];
  }

  getProductList(){
    this.service.getProductList().subscribe(response => this.products = response['data'].slice(5))
  }

  onSortChange(event: any) {
    console.log(event)
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
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

  getSeverity(product: Product) {
    switch (product.inventoryStatus) {
        case 'INSTOCK':
            return 'success';

        case 'LOWSTOCK':
            return 'warning';

        case 'OUTOFSTOCK':
            return 'danger';

        default:
            return null;
    }
  };


}
