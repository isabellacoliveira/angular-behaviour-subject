import { Component,  } from '@angular/core';
import { CaronteService } from '../service/caronte/caronte.service';
import { catchError, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-conta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent {
  isContaPagamento: boolean = true;
  currentMessage: boolean = false;
  showLoad: boolean = false; 
  showOpenAccount: boolean = false; 

  constructor(
    private caronteService: CaronteService,     
  ) {}

  abrirConta() {
    console.log('chamei galera');
    this.showLoad = true;
  
    if (this.isContaPagamento) {
      this.caronteService.currentMessage.subscribe(value => {
        if (value) {
          this.currentMessage = value;
          console.log('Valor atual do BehaviorSubject:', value);
          this.contratarOferta();
          this.showLoad = false;
          this.showOpenAccount = true;
        }
      });
    }
  }
  
  createPostObject() {
    let postObject = {
      nome: 'Isa', 
      ano: 2004 
    };
    return postObject;
  }

  contratarOferta() {
    let postData = this.createPostObject();
    this.caronteService.sendMessage(postData)
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar mensagem:', error);
          return of(null); 
        })
      )
      .subscribe(response => {
        if (response) {
          console.log('Resposta recebida:', response);
        } else {
          console.log('Nenhuma resposta recebida.');
        }
      });
  }
}
