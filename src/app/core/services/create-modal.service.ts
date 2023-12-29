import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateModalService {
  private modalOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  isModalOpen(): Observable<boolean> {
    return this.modalOpen.asObservable();
  }

  setModalState(isOpen: boolean): void {
    this.modalOpen.next(isOpen);
  }
}
