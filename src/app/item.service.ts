import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { IItem } from './IItem';
import { environment } from 'src/environments/environment.prod';
const URL= environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ItemService {

  itemURL = URL + '/items' 
  
  constructor(private httpClient: HttpClient) { }

  getItemById(id: number): Observable<IItem> {
    return this.httpClient.get<IItem>(`${this.itemURL}/${id}`);
  }

  getItems(count = 10): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(this.itemURL).pipe(
      map(data => data.filter((todo, i) => i < count))
    );
  }

  createItem(item: IItem): Observable<IItem> {
    return this.httpClient.post<IItem>(this.itemURL, item);
  }

  updateItem(item: IItem): Observable<IItem> {
    return this.httpClient.put<IItem>(`${this.itemURL}/${item.id}`, item)
  }

  deleteItem(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${this.itemURL}/${id}`);
  }
}
