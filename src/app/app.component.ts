import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "./shared/auth.service";
import {AssignmentsService} from "./shared/assignments.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Application de gestion des devoirs à rendre (Assignments)';

  constructor(private authService: AuthService, private router: Router, private assignmentsService: AssignmentsService) {
  }

  login() {
    // if (!this.authService.loggedIn) {
    //   this.authService.logIn();
    // } else {
    //   this.authService.logOut();
    //   this.router.navigate(['/home']);
    // }
  }
  peuplerBD() {
    // version naive et simple
    //this.assignmentsService.peuplerBD();

    // meilleure version :
    this.assignmentsService.peuplerBDAvecForkJoin()
      .subscribe(() => {
        console.log("LA BD A ETE PEUPLEE, TOUS LES ASSIGNMENTS AJOUTES,"+
          "ON RE-AFFICHE LA LISTE");
        // replaceUrl = true = force le refresh, même si
        // on est déjà sur la page d’accueil
// Marche plus avec la dernière version d’angular
        this.router.navigate(["/home"], {replaceUrl:true});
      })
  }
}
