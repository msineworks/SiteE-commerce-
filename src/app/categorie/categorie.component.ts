import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieService } from './categorie.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-categorie',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './categorie.component.html',
  styleUrl: './categorie.component.css'
})
export class CategorieComponent {

  listCategorie:any;
  constructor (private categorieService: CategorieService){  }

    ngOnInit():void {//fonction de demarrage d'angular
      this.getCategoriesFromService();
    } 

    getCategoriesFromService():void{
      this.categorieService.getCategories().subscribe(
        etu =>{
          this.listCategorie=etu;//etu contient le retour de la fonction getEtudiant()
        }
      );
    }

}
