import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  private url="http://localhost/api/api-categorie.php";

  constructor(private http: HttpClient) { }
  
  getCategories():Observable<any[]>{
    return this.http.get<any[]>(this.url);
  }
}
