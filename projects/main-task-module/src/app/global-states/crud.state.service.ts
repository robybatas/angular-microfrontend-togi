import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Item, itemInterface } from '../interfaces/item.interface';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private dataPost = new BehaviorSubject<itemInterface[]>([]);
  public dataPost$: Observable<itemInterface[]> = this.dataPost.asObservable();
  private dataSelected = new BehaviorSubject<itemInterface>(new Item());
  public dataSelected$: Observable<itemInterface> = this.dataSelected.asObservable();

  setData(data: itemInterface[]): void {
    this.dataPost.next(data);
  }

  selectData(data: itemInterface): void {
    this.dataSelected.next(data);
  }
}
