import { Injectable } from '@angular/core';
import { Tache } from '../model/tache.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class TacheService {
  apiURL: string = 'http://localhost:8080/taches/api/all';


  taches! : Tache[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeTache(): Observable<Tache[]>{
    return this.http.get<Tache[]>(this.apiURL);
    }

  

     
       
}