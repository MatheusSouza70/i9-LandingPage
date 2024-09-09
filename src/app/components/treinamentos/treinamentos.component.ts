import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-treinamentos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './treinamentos.component.html',
  styleUrl: './treinamentos.component.scss'
})
export class TreinamentosComponent {

}
