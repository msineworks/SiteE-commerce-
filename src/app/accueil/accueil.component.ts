import { Component } from '@angular/core';
import { CategorieComponent } from '../categorie/categorie.component';
import { ProduitComponent } from '../produit/produit.component';

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [CategorieComponent,ProduitComponent],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {

}
