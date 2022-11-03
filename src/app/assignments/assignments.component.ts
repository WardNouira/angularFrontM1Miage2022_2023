import { Component, OnInit } from '@angular/core';
import { Assignment } from "./assignment.model";
import {AssignmentsService} from "../shared/assignments.service";
import {Observable, of} from "rxjs";

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
  assignments: Assignment[];

  constructor(private assignmentService:AssignmentsService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.ajoutActive = true;
    }, 2000);
    this.getAssignments();
  }
  assignmentClique(assignment: Assignment) {
    this.assignmentSelectionne = assignment;
  }
  onAddAssignmentbtnClick(){
    this.formVisible = true;
  }


  /* supprimeAssignment($event: Assignment) {
    *this.assignments.find((assignment, index) => {
       if (assignment === $event) {
         this.assignments.splice(index, 1);
       }
     });
   }*/
  getAssignments(){
    this.assignmentService.getAssignments()
      .subscribe(assignments => this.assignments = assignments);
  }
  onNouvelAssignment(event:Assignment){
    this.assignmentService.addAssignment(event)
      .subscribe(message => console.log(message));
    this.formVisible = false;
  }
}


