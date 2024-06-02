import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProduitService } from './produit.service';
import { RouterModule,Routes } from '@angular/router';




@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './produit.component.html',
  styleUrl: './produit.component.css'
})
export class ProduitComponent {
  listProduit:any;
  constructor (private produitService: ProduitService){  }

    ngOnInit():void {//fonction de demarrage d'angular
      this.getProduitsFromService();
    } 

    getProduitsFromService():void{
      this.produitService.getProduits().subscribe(
        etu =>{
          this.listProduit=etu;//etu contient le retour de la fonction getEtudiant()
        }
      );
    }

}
