import { Component, OnInit } from '@angular/core';
import { Assignment } from "./assignment.model";

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre = "Mon application sur les Assignments !";
  ajoutActive = false;
  nomDevoir:string = "";
  dateDeRendu: any;
  assignments:({ rendu: boolean; dateDeRendu: Date; nom: string } | { rendu: boolean; dateDeRendu: Date; nom: string })[] = [
    {
      nom : "Devoir Angular à rendre",
      dateDeRendu : new Date('2020-10-10'),
      rendu : false
    },
    {
      nom : "Devoir JAVA à rendre",
      dateDeRendu : new Date('2020-09-10'),
      rendu : false
    },
  ];

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
  }

  onSubmit() {
    const newAssignement = new Assignment();
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    this.assignments.push(newAssignement);
  }



}
