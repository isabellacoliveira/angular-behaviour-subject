import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CaronteService {
  private messageSource = new BehaviorSubject<boolean>(false);
  currentMessage = this.messageSource.asObservable();

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts'; 

  constructor(private http: HttpClient) {}

  sendMessage(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  fetchMessage() {
    console.log('fiz o get')
    return this.http.get(this.apiUrl);
  }

  checkIfGetEnds(getEnd: boolean){
    console.log('chamei')
    this.messageSource.next(getEnd);
  }

  recieveGetStatus(checkChanges: any){
    console.log('ive recieved get status', checkChanges)
  }
}
