import { Component,Input, OnInit ,Output,EventEmitter} from '@angular/core';
import {Assignment} from "../assignment.model";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis! :Assignment;
  @Output() supprimeAssignment = new EventEmitter<Assignment>;
  constructor() { }

  ngOnInit(): void {
  }
  deleteButton() {
    this.supprimeAssignment.emit(this.assignmentTransmis);
    this.assignmentTransmis = null;
  }


  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
  }

}
