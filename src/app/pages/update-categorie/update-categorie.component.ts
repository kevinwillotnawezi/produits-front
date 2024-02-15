import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Categorie } from '../../model/categorie.model';

@Component({
  selector: 'app-update-categorie',
  templateUrl: './update-categorie.component.html',
  styleUrl: './update-categorie.component.scss',
})
export class UpdateCategorieComponent implements OnInit {
  @Input() ajout!: boolean;
  @Input() categorie!: Categorie;
  @Output() categorieUpdated = new EventEmitter<Categorie>();

  ngOnInit(): void {
    console.log('ngOnInit du composant UpdateCategorie ', this.categorie);
  }

  saveCategorie() {
    this.categorieUpdated.emit(this.categorie);
  }
}
