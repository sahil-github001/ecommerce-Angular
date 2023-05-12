import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get_all_products() {
    return this.http.get('http://localhost:3000/all-products');
  }

  searchkey = new BehaviorSubject('');

  add_to_wishlist(product: any) {
    const body = {
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      description: product.description
    }
    return this.http.post('http://localhost:3000/addToWishlist', body);
  }

  getWishlist() {
    return this.http.get('http://localhost:3000/getWishlist');
  }

  deleteWish(id: any) {
    return this.http.delete('http://localhost:3000/deleteWishlist/' + id);
  }
  
}
