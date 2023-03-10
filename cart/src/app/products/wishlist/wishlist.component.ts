import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {

  wishList: any = [];
  errorMsg: any;

  constructor(private api: ApiService, private router: Router, private cart: CartService) { }

  ngOnInit(): void {
    this.api.getWishlist().subscribe(
      (data: any) => {
        this.wishList = data.products;
        if (this.wishList.length == 0) {
          this.errorMsg = 'Empty wishlist';
        }
      },
      (data: any) => {
        this.errorMsg = data.error.message;
      }
    )
  }

  deleteWish(product: any) {
    this.api.deleteWish(product.id).subscribe(
      (result: any) => {
        alert(result.message);
        this.ngOnInit() // Automatic refresh
        this.wishList = result.wishList
      },
      (result: any) => {
        alert(result.error.message);
      }
    )
  }

  addtocart(product: any) {
    this.cart.addtocart(product)
  }
  
}
