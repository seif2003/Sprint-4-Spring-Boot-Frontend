import { Component, OnInit } from '@angular/core';
import { Tache } from '../model/tache.model';
import { TacheService } from '../services/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {

     taches! : Tache[]; //un tableau de Produit
     
     constructor(private tacheService: TacheService ) {
      
      }
   

      ngOnInit(): void {

        this.chargerTaches();
      }
    
      chargerTaches(){
        this.tacheService.listeTache().subscribe(taches => {
          console.log(taches);
          this.taches = taches;
          });
      }
   

 
  

}
