import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {IProdutoCarrinho} from '../products';
import { NotificacaoService } from 'src/app/notificacao.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  itensCarrinho: IProdutoCarrinho[] = []
  total = 0;

  constructor(
    public cartService: CartService,
    private notificacaoService: NotificacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.itensCarrinho = this.cartService.obtemCarrinho();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itensCarrinho.reduce((prev, curr) => prev + (curr.preco * curr.quantidade), 0);
  }


  removerItensCarrinho(produtoId : number) {
    this.itensCarrinho = this.itensCarrinho.filter(item => item.id !== produtoId);
    this.cartService.removerItensCarrinho(produtoId);
    this.calcularTotal();
  }
  
  comprar() {
    this.notificacaoService.notificar("A compra foi finalizada!")
    this.cartService.limparCarrinho();
    this.router.navigate(["produtos"])
  }
}
