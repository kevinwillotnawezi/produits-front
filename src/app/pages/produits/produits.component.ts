import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from '../../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss',
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];

  constructor(private produitService: ProduitService) {
    // this.produits = produitService.listeProduits();
  }

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe((prods) => {
      console.log(prods);
      this.produits = prods;
    });
  }

  supprimerProduit(p: Produit) {
    // console.log(p);
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      // this.produitService.supprimerProduit(p);
      this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
    }
  }
}
