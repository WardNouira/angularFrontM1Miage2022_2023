import { Component,Input, OnInit ,Output,EventEmitter} from '@angular/core';
import {Assignment} from "../assignment.model";
import {AssignmentsService} from "../../shared/assignments.service";
import {ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-assignment-detail',
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent implements OnInit {
  @Input() assignmentTransmis! :Assignment;
  @Output() supprimeAssignment = new EventEmitter<Assignment>;
  constructor(private assignmentService: AssignmentsService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.getAssignment();
  }
  deleteButton() {
    //this.supprimeAssignment.emit(this.assignmentTransmis);
    //this.assignmentTransmis = null;
    this.assignmentService.deleteAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    this.assignmentTransmis = null;
    this.router.navigate(['/home']);
  }

  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
    this.assignmentService.updateAssignment(this.assignmentTransmis).subscribe(message => console.log(message));
    this.router.navigate(['/home']);
  }
  getAssignment(){
    const id = +this.route.snapshot.params['id'];
    this.assignmentService.getAssignment(id).subscribe(assignment => this.assignmentTransmis = assignment);
  }

}
