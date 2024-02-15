import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './pages/update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { RechercheParCategorieComponent } from './pages/recherche-par-categorie/recherche-par-categorie.component';
import { RechercheParNomComponent } from './pages/recherche-par-nom/recherche-par-nom.component';
import { SearchFilterPipe } from './util/search-filter.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ListeCategoriesComponent } from './pages/liste-categories/liste-categories.component';
import { UpdateCategorieComponent } from './pages/update-categorie/update-categorie.component';
import { LoginComponent } from './pages/login/login.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
    RechercheParCategorieComponent,
    SearchFilterPipe,
    RechercheParNomComponent,
    ListeCategoriesComponent,
    UpdateCategorieComponent,
    LoginComponent,
    ForbiddenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    // Ng2SearchPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
