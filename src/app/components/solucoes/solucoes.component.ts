import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-solucoes',
  standalone: true,
  imports: [HeaderComponent,FooterComponent],
  templateUrl: './solucoes.component.html',
  styleUrl: './solucoes.component.scss'
})
export class SolucoesComponent {

}
