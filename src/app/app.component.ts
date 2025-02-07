import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContaComponent } from './conta/conta.component';
import { CoreComponent } from './core/core.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContaComponent, CoreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-subject';
}
