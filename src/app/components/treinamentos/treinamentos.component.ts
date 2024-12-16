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

if (typeof document !== 'undefined') {
  const tabs = document.querySelectorAll<HTMLAnchorElement>('.tab');
  const tabContents = document.querySelectorAll<HTMLElement>('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault(); // Evita comportamento padrão do link

      // Remove a classe ativa de todas as abas
      tabs.forEach(item => item.classList.remove('active'));

      // Adiciona a classe ativa na aba clicada
      tab.classList.add('active');

      // Oculta todos os conteúdos das abas
      tabContents.forEach(content => content.classList.remove('active'));

      // Exibe o conteúdo correspondente à aba clicada
      const tabId = tab.getAttribute('data-tab');
      if (tabId) {
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      }
    });
  });

}
