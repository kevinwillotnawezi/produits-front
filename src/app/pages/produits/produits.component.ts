import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from '../../services/produit.service';
import { AuthService } from './../../services/auth.service';
import { Image } from '../../model/image.model';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrl: './produits.component.scss',
})
export class ProduitsComponent implements OnInit {
  produits!: Produit[];
  apiurl: string = 'http://localhost:8080/produits/api';

  constructor(
    private produitService: ProduitService,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.chargerProduits();
  }

  chargerProduits() {
    this.produitService.listeProduits().subscribe((prods) => {
      this.produits = prods;
      this.produits.forEach((prod) => {
        if (prod.image !== null) {
          this.produitService
            .loadImage(prod.image.idImage)
            .subscribe((img: Image) => {
              prod.imageStr = 'data:' + img.type + ';base64,' + img.image;
            });
        }
      });
    });
  }

  supprimerProduit(p: Produit) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) {
      // this.produitService.supprimerProduit(p.idProduit).subscribe(() => {
      this.produitService.supprimerProduit(p.id).subscribe(() => {
        console.log('produit supprimé');
        this.chargerProduits();
      });
    }
  }
}
