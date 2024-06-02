import { ComponentFixture, TestBed } from '@angular/core/testing';
import {  Routes } from '@angular/router';
import { CategorieComponent } from './categorie.component';
import { DetailsProduitComponent } from '../details-produit/details-produit.component';
import { RouterModule} from '@angular/router';

describe('CategorieComponent', () => {
  let component: CategorieComponent;
  let fixture: ComponentFixture<CategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
