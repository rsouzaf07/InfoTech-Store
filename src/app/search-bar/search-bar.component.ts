import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  descricao = "";

  searchGlass = faMagnifyingGlass

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  pesquisar() {
    if (this.descricao) {
      this.router.navigate(["produtos"], {queryParams: {descricao: this.descricao}} );
      return;
    }
    this.router.navigate(["produtos"]);
  }  
}
