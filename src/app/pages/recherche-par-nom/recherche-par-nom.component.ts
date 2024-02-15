import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../../services/produit.service';
import { Produit } from '../../model/produit.model';

@Component({
  selector: 'app-recherche-par-nom',
  templateUrl: './recherche-par-nom.component.html',
  styleUrl: './recherche-par-nom.component.scss',
})
export class RechercheParNomComponent implements OnInit {
  produits!: Produit[];
  nomProduit!: string;
  allProduits!: Produit[];
  searchTerm!: string;

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produitService.listeProduits().subscribe((prods) => {
      console.log(prods);
      this.allProduits = prods;
    });
  }

  rechercherProds() {
    this.produitService.rechercherParNom(this.nomProduit).subscribe((prods) => {
      this.produits = prods;
      console.log(prods);
    });
  }

  onKeyUp(filterText: string) {
    this.produits = this.allProduits.filter((item) =>
      item.nomProduit.toLowerCase().includes(filterText)
    );
  }
}
