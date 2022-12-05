import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Product } from './products';
import {catchError, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  /** GET heroes from the server */
  getListProduct(): Observable<Product[]> {
    let url = "http://localhost:8080/api/products";
    return this.http.get<Product[]>(url)
        .pipe(
            tap(_ => console.log('fetched heroes')),
            catchError(this.handleError<Product[]>('getListProduct', []))
        );
  }
  /* . . . */
  getProducts() {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    this.http
      .get<any>('http://localhost:8080/api/products', {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
        return data.data;
      });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
