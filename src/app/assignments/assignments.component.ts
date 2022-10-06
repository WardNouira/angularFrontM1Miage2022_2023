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
  assignmentSelectionne: Assignment;
  formVisible = false;
  assignments: Assignment[] = [
    {
      nom : "Devoir Angular à rendre",
      dateDeRendu : new Date('2020-10-10'),
      rendu : true
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
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentbtnClick(){
    this.formVisible = true;
  }
  onNouvelAssignment(event:Assignment){
    this.assignments.push(event);
    this.formVisible = false;
}

  supprimeAssignment($event: Assignment) {
    this.assignments.find((assignment, index) => {
      if (assignment === $event) {
        this.assignments.splice(index, 1);
      }
    });
  }
}



