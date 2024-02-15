import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { UpdateProduitComponent } from './pages/update-produit/update-produit.component';
import { RechercheParCategorieComponent } from './pages/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './pages/recherche-par-nom/recherche-par-nom.component';
import { ListeCategoriesComponent } from './pages/liste-categories/liste-categories.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { produitGuard } from './guards/produit.guard';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  {
    path: 'add-produit',
    component: AddProduitComponent,
    canActivate: [produitGuard],
  },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: 'rechercheParCategorie', component: RechercheParCategorieComponent },
  { path: 'rechercheParNom', component: RechercheParNomComponent },
  { path: 'listeCategories', component: ListeCategoriesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
