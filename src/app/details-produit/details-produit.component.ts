// details-produit.component.ts
// details-produit.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DetailsProduitService } from './details-produit.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-details-produit',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css'],
})
export class DetailsProduitComponent implements OnInit {
  produitId: string='';
  produit: any; // Définissez le type approprié pour votre produit
  produitlink: any;

  constructor(
    private route: ActivatedRoute,
    private detailsProduitService: DetailsProduitService
  ) {}

  ngOnInit() {
    // Récupérer l'ID du produit à partir de la route
    this.route.paramMap.subscribe((params) => {
      var idProd = params.get('id');
      // Vérifier si l'ID est présent avant de l'utiliser
      if (idProd) {
        // Utiliser l'ID pour récupérer les détails du produit
        this.produitId=idProd;
        this.detailsProduitService.getProduitDetails(idProd).subscribe(
          (data) => {
            this.produit = data;
          }
        );

      }
    });

  }
  ajouterProduitservice()
  {
    this.detailsProduitService.ajouterProduit(this.produitId).subscribe(
      (data) => {
        this.produitlink = data;
      }
    );
    //window.alert('Fonction ajouterProduitservice appelée');
  }
}
