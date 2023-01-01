import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators} from "@angular/forms";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'app-toolbar-connexion',
  templateUrl: './toolbar-connexion.component.html',
  styleUrls: ['./toolbar-connexion.component.css']
})
export class ToolbarConnexionComponent implements OnInit {
  connexionForm = this.fb.group({
    pseudo: ['', Validators.required],
    motDePasse: ['',Validators.required]
  });
  hide = true;
  isAdmin = false;
  constructor(private fb: FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
  }
  // @ts-ignore
  getErrorPseudoMessage() {
    if (this.connexionForm.get('pseudo').hasError('required')) {
      return 'Vous devez entrer un pseudo';
    }
  }
  // @ts-ignore
  getErrorMotDePasseMessage() {
    if (this.connexionForm.get('motDePasse').hasError('required')) {
      return 'Vous devez entrer un mot de passe';
    }
  }

  onSubmitConnexion() {
    this.authService.logIn(this.connexionForm.get('pseudo').value, this.connexionForm.get('motDePasse').value)
      .subscribe(data => {
        console.log(data);
        this.authService.loggedIn = true;
        this.authService.isUserAdmin = data.isAdmin;
      })
  }

  onSubmitInscription() {
    this.authService.signUp(this.connexionForm.get('pseudo').value, this.connexionForm.get('motDePasse').value,this.isAdmin)
      .subscribe(data => {
        console.log(data);
      })
  }

  setAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
