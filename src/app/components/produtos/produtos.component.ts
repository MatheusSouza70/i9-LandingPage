import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { CommonModule } from '@angular/common';
import { NgOptimizedImage } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
// import { Pipe, PipeTransform } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

interface Produto {
  nome: string;
  imagem: string;
  linkVideo: string;
  categoria: string[];
  descricao?: string;
}

// @Pipe({ name: 'safeUrl' })
// export class SafeUrlPipe implements PipeTransform {
//     constructor(private sanitizer: DomSanitizer) {}

//     transform(url: string): SafeResourceUrl {
//         return this.sanitizer.bypassSecurityTrustResourceUrl(url);
//     }
// }

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
      linkVideo:'https://youtu.be/E4KV5tbpK1w?si=NfDOWvTuF9qzmu73',
      categoria: ['hardware', 'drawer'],
      descricao: 'Uma gaveta inteligente para controle de ferramentas e inventário.'
    },
    {
      nome: 'AccuCab',
      imagem: '/assets/accucab.png',
      linkVideo:'https://youtu.be/E4KV5tbpK1w?si=NfDOWvTuF9qzmu73',
      categoria: ['hardware', 'cabinet'],
      descricao: 'Um armário inteligente para armazenar e monitorar o uso de itens.'
    },
    {
      nome: 'Express Locker',
      imagem: '/assets/express-locker.png',
      linkVideo:'https://youtu.be/E4KV5tbpK1w?si=NfDOWvTuF9qzmu73',
      categoria: ['hardware', 'locker', 'express'],
      descricao: 'Sistema de armazenamento seguro com acesso rápido para itens expressos.'
    },
    {
      nome: 'ProLock',
      imagem: '/assets/prolock.png',
      linkVideo:'https://youtu.be/E4KV5tbpK1w?si=NfDOWvTuF9qzmu73',
      categoria: ['hardware', 'security'],
      descricao: 'Cofre inteligente para máxima segurança e rastreamento de inventário.'
    }
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

  produtoSelecionado: Produto | null = null;

abrirModal(produto: Produto): void {
  this.produtoSelecionado = produto;
}

fecharModal(): void {
  this.produtoSelecionado = null;
}
}

