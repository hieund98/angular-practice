import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  /* . . . */
  getProducts() {
    let headers = new HttpHeaders({
      'content-type': 'application/json',
    });

    this.http
      .get<any>('https://random-facts2.p.rapidapi.com/getfact', {
        headers: headers,
      })
      .subscribe((data) => {
        console.log(data);
      });
  }
}
