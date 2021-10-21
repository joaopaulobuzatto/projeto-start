import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProdutoListComponent } from './produto-list/produto-list.component';

@NgModule({
  declarations: [
    ListComponent,
    ProdutoListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule {
}
