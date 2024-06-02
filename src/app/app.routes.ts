import {  Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategorieComponent } from './categorie/categorie.component';
import { ProduitComponent } from './produit/produit.component';
import { DetailsProduitComponent } from './details-produit/details-produit.component';
import { AccueilComponent } from './accueil/accueil.component';



export const routes: Routes = [
    {path : '', component: AccueilComponent},
    { path: 'details-produit/:id', component: DetailsProduitComponent }
];
