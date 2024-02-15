import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { UpdateProduitComponent } from './pages/update-produit/update-produit.component';

const routes: Routes = [
  { path: 'produits', component: ProduitsComponent },
  { path: 'add-produit', component: AddProduitComponent },
  { path: 'updateProduit/:id', component: UpdateProduitComponent },
  { path: '', redirectTo: 'produits', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
