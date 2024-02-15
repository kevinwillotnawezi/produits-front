import { Component, OnInit } from '@angular/core';
import { Produit } from '../../model/produit.model';
import { ProduitService } from '../../services/produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from '../../model/categorie.model';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrl: './update-produit.component.scss',
})
export class UpdateProduitComponent implements OnInit {
  currentProduit = new Produit();
  categories!: Categorie[];
  updatedCatId!: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    // console.log(this.route.snapshot.params.id);
    // this.categories = this.produitService.listeCategories();
    this.produitService.listeCategories().subscribe((cats) => {
      this.categories = cats;
      console.log(cats);
    });
    // this.currentProduit = this.produitService.consulterProduit(
    //   this.activatedRoute.snapshot.params['id']
    // );
    // this.updatedCatId = this.currentProduit.categorie.idCat;
    this.produitService
      .consulterProduit(this.activatedRoute.snapshot.params['id'])
      .subscribe((prod) => {
        this.currentProduit = prod;
        this.updatedCatId = this.currentProduit.categorie.idCat;
      });
  }

  updateProduit() {
    //console.log(this.currentProduit);
    // this.currentProduit.categorie = this.produitService.consulterCategorie(
    //   this.updatedCatId
    // );
    // this.produitService.updateProduit(this.currentProduit);
    // this.router.navigate( [ 'produits' ] );
    this.currentProduit.categorie = this.categories.find(
      (cat) => cat.idCat == this.updatedCatId
    )!;
    this.produitService.updateProduit(this.currentProduit).subscribe((prod) => {
      this.router.navigate(['produits']);
    });
  }
}
