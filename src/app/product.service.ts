import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import {Order, Product} from './products';
import {catchError, map, Observable, of, tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  path = 'api/products';
  items: Product[] = [];
  constructor(private apiService: ApiService) {}

  async addToList(prod: Product) {
    let url = 'http://localhost:8080/api/products'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(prod)
    }

    const rawResponse = await fetch(url, options);
    const response = await rawResponse.json();

    return true;
  }

  /* . . . */
  async getProducts() {
    const options = {
      params: {},
      headers: {
        Accept: 'application/json'
      }
    };

    return this.apiService.get(this.path, options, map((response: any) => {
      return response;
        })
    );
  }
  async removeProductById(id: number) {
    let url = 'http://localhost:8080/api/products/' + id;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const rawResponse = await fetch(url, options).then(async (response) => {
      console.log(response)
    });
  }
  async getByProductId(id: number) {
    const options = {
      params: {},
      headers: {
        Accept: 'application/json'
      }
    };

    return this.apiService.get(this.path + '/' + id, options, map((response: any) => {
          return response;
        })
    );
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
