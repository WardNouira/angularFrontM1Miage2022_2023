import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import {of,Observable} from "rxjs";
import {LoggingService} from "./logging.service";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments: Assignment[] = [
    {
      id: 1,
      nom : "Devoir Angular à rendre",
      dateDeRendu : new Date('2020-10-10'),
      rendu : true
    },
    {
      id: 2,
      nom : "Devoir JAVA à rendre",
      dateDeRendu : new Date('2020-09-10'),
      rendu : false
    },
  ];
  constructor(private loggingService:LoggingService) {

  }
  getAssignments(): Observable<Assignment[]>{
    return of(this.assignments);
  }
  addAssignment(assignment:Assignment): Observable<string>{
    this.assignments.push(assignment);
    this.loggingService.log(assignment.nom,"ajouté");
    return of('Assignment ajouté');
  }

  updateAssignment(assignment:Assignment): Observable<string>{
    return of("Assignment service: assignment modifié")
  }
  deleteAssignment(assignment:Assignment): Observable<string>{
    let pos = this.assignments.indexOf(assignment);
    this.assignments.splice(pos,1);
    return of("Assignment service: assignment supprimé")
  }
  getAssignment(id:number): Observable<Assignment|undefined>{
    const a: Assignment|undefined = this.assignments.find(a => a.id === id);
    return of(a);
  }


}
