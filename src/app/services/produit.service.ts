import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';
import { Categorie } from '../model/categorie.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CategorieWrapper } from '../model/categorie-wrapped.model';
import { AuthService } from './auth.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ProduitService {
  produits!: Produit[];
  produit!: Produit;
  categories!: Categorie[];
  apiURL: string = 'http://localhost:8080/produits/api';
  apiURLCat: string = 'http://localhost:8080/produits/cat';

  constructor(private http: HttpClient, private authService: AuthService) {}

  getHeaders() {
    let jwt = this.authService.getToken();
    jwt = 'Bearer ' + jwt;
    let httpHeaders = new HttpHeaders({ Authorization: jwt });
    return {
      headers: httpHeaders,
    };
  }

  listeProduits(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.apiURL + '/all');
  }

  ajouterProduit(prod: Produit): Observable<Produit> {
    return this.http.post<Produit>(
      this.apiURL + '/addprod',
      prod,
      this.getHeaders()
    );
  }

  supprimerProduit(id: number) {
    const url = `${this.apiURL}/${id}`;
    return this.http.delete(url + '/delprod', this.getHeaders());
  }

  consulterProduit(id: number): Observable<Produit> {
    const url = `${this.apiURL}/getbyid/${id}`;
    return this.http.get<Produit>(url);
  }

  updateProduit(prod: Produit): Observable<Produit> {
    return this.http.put<Produit>(
      this.apiURL + '/updateprod',
      prod,
      this.getHeaders()
    );
  }

  trierProduits() {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

  listeCategories(): Observable<CategorieWrapper> {
    return this.http.get<CategorieWrapper>(this.apiURLCat, this.getHeaders());
  }

  consulterCategorie(id: number): Categorie {
    return this.categories.find((cat) => cat.idCat == id)!;
  }

  rechercherParCategorie(idCat: number): Observable<Produit[]> {
    const url = `${this.apiURL}/prodscat/${idCat}`;
    return this.http.get<Produit[]>(url, this.getHeaders());
  }

  rechercherParNom(nom: string): Observable<Produit[]> {
    const url = `${this.apiURL}/prodsByName/${nom}`;
    return this.http.get<Produit[]>(url);
  }

  ajouterCategorie(cat: Categorie): Observable<Categorie> {
    return this.http.post<Categorie>(this.apiURLCat, cat, this.getHeaders());
  }
}
