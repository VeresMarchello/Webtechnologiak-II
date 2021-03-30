import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError, map } from 'rxjs/operators'
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class WeldPointService {
  url = 'http://localhost:8080/api'
  headers = new HttpHeaders().set('Content-Type', 'application/json')

  constructor(private http: HttpClient) {}

  //add
  addeWeldPoint(data): Observable<any> {
    const url = `${this.url}/addWeldPoint`
    return this.http.post(url, data).pipe(catchError(this.error))
  }

  //get
  getWeldPoints() {
    return this.http.get(`${this.url}/getWeldPoints`)
  }

  //get by Id
  getWeldPoint(id): Observable<any> {
    const url = `${this.url}/getWeldPoint/${id}`
    return this.http.get(url, { headers: this.headers }).pipe(
      map((res: Response) => {
        return res || {}
      }),
      catchError(this.error)
    );
  }

  //update
  updateWeldPoint(id, data): Observable<any> {
    const url = `${this.url}/updateWeldPoint/${id}`
    return this.http.put(url, data, { headers: this.headers }).pipe(catchError(this.error))
  }

  //delete
  deleteWeldPoint(id): Observable<any> {
    const url = `${this.url}/deleteWeldPoint/${id}`
    return this.http.delete(url, { headers: this.headers }).pipe(catchError(this.error))
  }

  //error handling
  error(error: HttpErrorResponse) {
    let errorMessage = ""
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = error.error.message
    } 
    else {
      //server error
      errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`
    }

    console.log(errorMessage)
    return throwError(errorMessage)
  }
}
