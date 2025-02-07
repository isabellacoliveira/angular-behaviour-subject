import { Component, Input } from '@angular/core';
import { CaronteService } from '../service/caronte/caronte.service';
import { BehaviorSubject, catchError, of } from 'rxjs';

@Component({
  selector: 'app-core',
  standalone: true,
  imports: [],
  templateUrl: './core.component.html',
  styleUrl: './core.component.css'
})
export class CoreComponent {
  isContaPagamento: boolean = true;

  constructor(private caronteService: CaronteService) {}

  ngOnInit(){
    setTimeout(() => {
      this.buscarOferta()
    }, 9000)
  }

  buscarOferta() {
    console.log('teste');
    this.caronteService.fetchMessage()
      .pipe(
        catchError(error => {
          console.error('Erro ao buscar mensagem:', error);
          return of(null); 
        })
      )
      .subscribe(response => {
        if (response) {
          setTimeout(() => {
            console.log('estou emitindo')
            let checkChanges = this.caronteService.checkIfGetEnds(true);
            this.caronteService.recieveGetStatus(checkChanges)
          }, 5000)
          console.log('Resposta recebida:', response);
        } else {
          console.log('Nenhuma resposta recebida.');
        }
      });
  }
}
