import {Component, OnInit} from '@angular/core';

import {Produto} from '../produto.model';
import {ProdutoService} from '../service/produto.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos: Produto[];
  isLoading = false;

  constructor(protected produtoService: ProdutoService) {
    this.produtos = [];
  }

  loadAll(): void {
    this.isLoading = true;

    this.produtoService
      .findAll()
      .subscribe(
        (res: Produto[]) => {
          this.isLoading = false;
          if (res) {
            for (const i of res) {
              this.produtos.push(i);
            }
          }
        },
        () => {
          this.isLoading = false;
        }
      );
  }

  ngOnInit(): void {
    this.loadAll();
  }

}
