import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { itemInterface } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) {}

  getAll(resource: string): Observable<any[]> {
    return this.http.get<itemInterface[]>(`${this.apiUrl}/${resource}`);
  }

  getOne(resource: string, id: number): Observable<itemInterface> {
    return this.http.get<itemInterface>(`${this.apiUrl}/${resource}/${id}`);
  }

  create(resource: string, data: any): Observable<itemInterface> {
    return this.http.post<itemInterface>(`${this.apiUrl}/${resource}`, data);
  }

  update(resource: string, id: number, data: itemInterface): Observable<itemInterface> {
    return this.http.put<itemInterface>(`${this.apiUrl}/${resource}/${id}`, data);
  }

  delete(resource: string, id: number): Observable<itemInterface> {
    return this.http.delete<itemInterface>(`${this.apiUrl}/${resource}/${id}`);
  }
}
