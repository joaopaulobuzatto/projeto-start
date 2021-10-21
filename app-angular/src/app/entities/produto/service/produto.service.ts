import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {take} from "rxjs/operators";

import {Produto} from '../produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  protected resourceUrl = 'http://localhost:8080/api/produtos';

  constructor(protected http: HttpClient) {
  }

  findAll(): Observable<Produto[]> {
    return this.http
      .get<Produto[]>(`${this.resourceUrl}`)
      .pipe(take(1));
  }

}
