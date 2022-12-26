import { Component,EventEmitter, OnInit,Output } from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";


@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
  //@Output() nouvelAssignment  = new EventEmitter<Assignment>();
  nomDevoir:string = "";
  dateDeRendu:Date;
  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
  }
  onSubmit() {
    debugger;
    const newAssignement = new Assignment();
    //const assigments = new AssignmentModel();
    newAssignement.id = Math.floor(Math.random() * 1000);
    newAssignement.nom = this.nomDevoir;
    newAssignement.dateDeRendu = this.dateDeRendu;
    newAssignement.rendu = false;

    //this.assignments.push(newAssignement);
   // this.nouvelAssignment.emit(newAssignement);
    this.assignmentsService.addAssignment(newAssignement).subscribe(message => console.log(message));
  }

}
