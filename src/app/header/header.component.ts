import { Component, OnInit } from '@angular/core';
import {faShoppingCart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor (
    public cartService: CartService
  ) {

  }
  shoppingCart = faShoppingCart;
  searchGlass = faMagnifyingGlass;

}
