import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';

interface Produto {
  nome: string;
  imagem: string;
  precoOriginal: number;
  precoAtual: number;
  desconto: string;
  categoria: string[];
}


@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [HeaderComponent, CommonModule,FooterComponent, NgOptimizedImage],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})
export class ProdutosComponent {
  produtos: Produto[] = [
    {
      nome: 'AccuDrawer™',
      imagem: '/assets/accudrawer.png',
      precoOriginal: 2000.0,
      precoAtual: 1900.0,
      desconto: '5%',
      categoria: ['hardware', 'drawer'],
    },
    {
      nome: 'AccuCab',
      imagem: '/assets/accucab.png',
      precoOriginal: 3500.0,
      precoAtual: 3400.0,
      desconto: '3%',
      categoria: ['hardware', 'cabinet'],
    },
    {
      nome: 'Express Locker',
      imagem: '/assets/express-locker.png',
      precoOriginal: 2500.0,
      precoAtual: 2400.0,
      desconto: '4%',
      categoria: ['hardware', 'locker', 'express'],
    },
    {
      nome: 'ProLock',
      imagem: '/assets/prolock.png',
      precoOriginal: 4000.0,
      precoAtual: 3800.0,
      desconto: '5%',
      categoria: ['hardware', 'security'],
    },
  ];
  produtosFiltrados: Produto[] = [...this.produtos];

  // Função para filtrar produtos com base na categoria selecionada
  filtrarProdutos(categoria: string): void {
    // Se categoria for 'all' ou vazio, mostramos todos os produtos
    if (categoria === 'all' || !categoria) {
      this.produtosFiltrados = [...this.produtos];
    } else {
      this.produtosFiltrados = this.produtos.filter((produto) =>
        produto.categoria.includes(categoria)
      );
    }
  }
}
