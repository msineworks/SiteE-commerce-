// details-produit.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DetailsProduitService {
  private apiUrl = 'http://localhost/api/produitParId.php';
  private apiUrl2='http://localhost/api/insertproduct.php';

  constructor(private http: HttpClient) {}

  getProduitDetails(produitId: string): Observable<any[]> {
    const url = `${this.apiUrl}/${produitId}`;
    return this.http.get<any[]>(url);
  }
  ajouterProduit(produitId: string): Observable<any[]>
  {

    const url = `${this.apiUrl2}/${produitId}`;
    return this.http.get<any[]>(url);
  }
}
