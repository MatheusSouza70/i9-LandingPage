import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-treinamentos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './treinamentos.component.html',
  styleUrl: './treinamentos.component.scss'
})
export class TreinamentosComponent {

}
