import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from './products';
import {ApiResponse} from './api.response.model';
import {environment} from './environment.dev';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    protected apiServer = environment.apiServer;

    constructor(private httpClient: HttpClient) {
    }

    async getAsync(path: string, options: {}) {
        return await this.httpClient.get<ApiResponse>(this._buildUrl(path), options).toPromise();
    }

    get(path: string, options: {}, callback: any): Observable<any> {
        return this.httpClient.get<ApiResponse>(this._buildUrl(path), options)
            .pipe(callback || '');
    }

    post(path: string, options: any, callback: any): Observable<any> {
        let body = typeof options.body !== 'undefined' ? options.body : null;
        body = body == null && typeof options.params !== 'undefined' ? options.params : options;
        const headers = typeof options.headers !== 'undefined' ? options.headers : {};

        return this.httpClient.post<Product>(this._buildUrl(path), body, headers)
            .pipe(callback || '');
    }

    delete(path: string, options: {}, callback: any): Observable<any> {
        return this.httpClient.delete<ApiResponse>(this._buildUrl(path), options)
            .pipe(callback || '');
    }

    put(path: string, options: {}, callback: any): Observable<any> {
        return this.httpClient.put<ApiResponse>(this._buildUrl(path), options)
            .pipe(callback || '');
    }

    _buildUrl(path: string) {
        let baseUrl = '';
        if (this.apiServer.host) {
            baseUrl = this.apiServer.ssl ? 'https://' : 'http://';
            baseUrl += this.apiServer.host;
        }
        if (this.apiServer.prefix !== '') {
            baseUrl += '/' + this.apiServer.prefix;
        }
        return baseUrl + '/' + path;
    }
}
