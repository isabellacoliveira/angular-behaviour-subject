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
    console.log('chamando o post na service do caronte')
    return this.http.post(this.apiUrl, data);
  }

  fetchMessage() {
    console.log('chamando o get na service do caronte')
    return this.http.get(this.apiUrl);
  }

  checkIfGetEnds(getEnd: boolean){
    console.log('chequei se o get terminou')
    this.messageSource.next(getEnd);
  }

  recieveGetStatus(checkChanges: any){
    console.log('recebi o status do get', checkChanges)
  }
}
