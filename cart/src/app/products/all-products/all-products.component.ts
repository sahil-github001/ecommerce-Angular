import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{
  allProducts:any = [];
  searchTerm:string = '';
  
    constructor(private api:ApiService, private cart:CartService){}

    ngOnInit(): void {
      this.api.get_all_products().subscribe(
        (data:any) => {
          this.allProducts = data.products;
        }
      )
      this.api.searchkey.subscribe(
      (data:any) => {
        this.searchTerm = data;
      }
      )
    }

    addToWishlist(product:any){
      this.api.add_to_wishlist(product).subscribe(
        (result:any) => {
          alert(result.message);
        },
        (result:any) => {
          alert(result.error.message)
        }
      )
    }
    
    addtocart(product:any){
      this.cart.addtocart(product)
    }
}
