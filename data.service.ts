import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './Users';
import { Observable } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private httpclient : HttpClient) { }

  private dataURL = 'api/users';

  getAllUsers():Observable<Users[]>{
    return  this.httpclient.get<Users[]>(this.dataURL)
    .pipe(
      tap(),
      //catchError(this.handleError)
            )
  }

  addUser(user:Users){
    return this.httpclient.post<Users[]>(this.dataURL,user)
    .pipe(
      tap());
  }

}
