import { Injectable } from '@angular/core';
import {Assignment} from "../assignments/assignment.model";
import {of, Observable, map, tap, catchError, forkJoin} from "rxjs";
import {LoggingService} from "./logging.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {bdInitialAssignments} from "./data";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private HttpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }
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
  constructor(private loggingService:LoggingService, private http:HttpClient) { }
  url = "http://localhost:8010/api/assignments";
  getAssignments(): Observable<Assignment[]>{
    //return of(this.assignments);
    return this.http.get<Assignment[]>(this.url);
  }
  addAssignment(assignment:Assignment): Observable<any>{
    //this.assignments.push(assignment);
    //this.loggingService.log(assignment.nom,"ajouté");
   //return of('Assignment ajouté');
    return this.http.post<Assignment>(this.url,assignment,this.HttpOptions);
  }

  updateAssignment(assignment:Assignment): Observable<any>{
    //return of("Assignment service: assignment modifié")
    return this.http.put<Assignment>(this.url, assignment);
  }
  deleteAssignment(assignment:Assignment): Observable<any>{
    //let pos = this.assignments.indexOf(assignment);
    //this.assignments.splice(pos,1);
    //return of("Assignment service: assignment supprimé")
    let deleteURI = this.url + "/" + assignment._id;
    return this.http.delete(deleteURI);
  }
  getAssignment(id:number): Observable<Assignment|undefined>{
    //const a: Assignment|undefined = this.assignments.find(a => a.id === id);
    //return of(a);
    return this.http.get<Assignment>(this.url + "/" + id)
      .pipe(
        map(a=> {
          a.nom += "reçu et transformé avec un pipe";
          return a;
        }),
        tap(_=>{
          console.log("tap: assignment avec id ="+id+" requête GET envoyée sur MongoDB cloud")
        }),
        catchError(this.handleError<Assignment>("getAssignment(id=${id})"))

      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(operation + " a échoué" + error.message);
      return of(result as T);
    };
  }

  peuplerBDAvecForkJoin(): Observable<any> {
    const appelsVersAddAssignment:any = [];

    bdInitialAssignments.forEach((a) => {
      const nouvelAssignment:any = new Assignment();

      nouvelAssignment.id = a.id;
      nouvelAssignment.nom = a.nom;
      nouvelAssignment.dateDeRendu = new Date(a.dateDeRendu);
      nouvelAssignment.rendu = a.rendu;

      appelsVersAddAssignment.push(this.addAssignment(nouvelAssignment));
    });
    return forkJoin(appelsVersAddAssignment);
  }

}
