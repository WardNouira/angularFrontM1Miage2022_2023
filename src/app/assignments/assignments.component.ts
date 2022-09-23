import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  nomAssignment:string = "";
  dateDeRendu: any;
  assignments = [
    {
      nom : "TP1 sur WebComponents, un lecteur audio amélioré",
      dateDeRendu : '2020-11-17',
      rendu : false
    },
    {
      nom : "TP2 sur Angular, un joli gestionnaire de devoirs (Assignments)",
      dateDeRendu : '2020-12-15',
      rendu : false
    },
    {
      nom : "TP3 sur Angular, utilisation du routeur et de Web Services",
      dateDeRendu : '2021-01-04',
      rendu : false
    }
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    console.log(this.nomAssignment);
  }


}
