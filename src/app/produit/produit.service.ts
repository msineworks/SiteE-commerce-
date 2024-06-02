import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private url="http://localhost/api/api-produit.php";

  constructor(private http: HttpClient) { }
  
  getProduits():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
