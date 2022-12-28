import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient) { }
  urlConnexion = "http://localhost:8010/api/connexion";
  urlInscription = "http://localhost:8010/api/inscription";
  loggedIn = false;

  // logIn(){
  //   this.loggedIn = true;
  // }
  logIn(pseudo:any, motDePasse:any): Observable<any>{
    return this.http.post(this.urlConnexion, {pseudo: pseudo, motDePasse: motDePasse});
  }
  signUp(pseudo:any, motDePasse:any): Observable<any>{
    console.log("pseudo: " + pseudo + " motDePasse: " + motDePasse);
    return this.http.post(this.urlInscription, {pseudo: pseudo, motDePasse: motDePasse});
  }

  logOut(){
    this.loggedIn = false;
  }

  isAdmin(){
    const isUserAdmin = new Promise(
      (resolve, reject) => {
        resolve(this.loggedIn)
      }
    )
    return isUserAdmin;
  }
}
