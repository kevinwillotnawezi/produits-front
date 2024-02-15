import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { AddProduitComponent } from './pages/add-produit/add-produit.component';
import { FormsModule } from '@angular/forms';
import { UpdateProduitComponent } from './pages/update-produit/update-produit.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProduitsComponent,
    AddProduitComponent,
    UpdateProduitComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
