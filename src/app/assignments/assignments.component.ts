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
  page: number=1;
  limit: number=10;
  totalDocs: number = 0;
  totalPages: number = 0;
  hasPrevPage: boolean = false;
  prevPage: number = 0;
  hasNextPage: boolean = false;
  nextPage: number = 0;


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
    this.assignmentService.getAssignmentsPagine(this.page, this.limit)
      .subscribe(data => {
        this.assignments = data.docs;
        this.page = data.page;
        this.limit = data.limit;
        this.totalDocs = data.totalDocs;
        this.totalPages = data.totalPages;
        this.hasPrevPage = data.hasPrevPage;
        this.prevPage = data.prevPage;
        this.hasNextPage = data.hasNextPage;
        this.nextPage = data.nextPage;
        console.log("données reçues");
        console.log(data);
      });
}
  onNouvelAssignment(event:Assignment){
    this.assignmentService.addAssignment(event)
      .subscribe(message => console.log(message));
    this.formVisible = false;
  }

  pageSuivante(){
    if(this.hasNextPage){
      this.page = this.nextPage;
      this.getAssignments();
    }
  }
  pagePrecedente(){
    if(this.hasPrevPage){
      this.page = this.prevPage;
      this.getAssignments();
    }
  }
  premierePage(){
    this.page = 1;
    this.getAssignments();
  }
  dernierePage(){
    this.page = this.totalPages;
    this.getAssignments();
  }
}


