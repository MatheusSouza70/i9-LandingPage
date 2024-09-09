import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent implements OnInit {
  produtos = [
    {
      nome: 'Produto 1',
      descricao: 'Descrição do produto 1',
      preco: 99.99,
      imagem: 'assets/produto1.jpg' // Caminho para a imagem do produto
    },
    {
      nome: 'Produto 2',
      descricao: 'Descrição do produto 2',
      preco: 149.99,
      imagem: 'assets/produto2.jpg' // Caminho para a imagem do produto
    },
    {
      nome: 'Produto 3',
      descricao: 'Descrição do produto 3',
      preco: 79.99,
      imagem: 'assets/produto3.jpg' // Caminho para a imagem do produto
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
