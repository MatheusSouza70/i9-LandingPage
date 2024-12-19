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
  vejamais: string;
  categoria: string[];
  descricao?: string;
  linkvideo: string;
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
  imports: [HeaderComponent, CommonModule, FooterComponent],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.scss'
})

export class ProdutosComponent {
  produtos: Produto[] = [
    {
      nome: 'AccuDrawer',
      imagem: '/assets/accudrawer.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/accudrawer---drawersystems-accudrawer--cp-l3-2720/p',
      categoria: ['hardware', 'drawer'],
      descricao: 'O AccuDrawer é um sistema de controle de ferramentas de última geração que aproveita o poder da tecnologia RFID para monitoramento e rastreamento inigualáveis ​​de suas ferramentas armazenadas.',
      linkvideo: 'https://youtu.be/tL-33_zmJso?si=17lOimAJtA_eHQQ3'
    },
    {
      nome: 'AccuCab',
      imagem: '/assets/accucab.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/accucab---doorsystems-accucab--cp-l3-2732/p',
      categoria: ['hardware', 'cabinet'],
      descricao: 'O AccuCab é uma solução automatizada de gerenciamento de ferramentas que aproveita o poder da tecnologia RFID e do software CribMaster para monitorar e rastrear com eficiência suas ferramentas etiquetadas com RFID. Com visibilidade em tempo real do seu inventário de ferramentas, o AccuCab permite o gerenciamento proativo e reduz o risco de extravio. Os principais recursos incluem:',
      linkvideo: 'https://youtu.be/kmuqMNQ5Vx0?si=kVYuj-Iu5o8Zo44v'
    },
    {
      nome: 'Express Locker',
      imagem: '/assets/express-locker.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/express-locker---lockersystems-express-locker--cp-l3-2722/p',
      categoria: ['hardware', 'locker', 'express'],
      descricao: 'O Express Locker é uma solução de armazenamento segura e eficiente projetada para complementar o Express Toolbox. Esta unidade auxiliar otimiza o gerenciamento de itens de inventário consumíveis e duráveis, garantindo que suas ferramentas e suprimentos estejam sempre organizados e facilmente acessíveis.',
      linkvideo: "https://youtu.be/cp-kOODyBJI?si=0RxHNQz8oPDKaq7D"
    },
    {
      nome: 'ProLock',
      imagem: '/assets/prolock.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/prolock---lockersystems-prolock--cp-l3-2710/p',
      categoria: ['hardware', 'security', 'lock'],
      descricao: 'O ProLock é uma solução de armário altamente segura e personalizável para armazenar e gerenciar com eficiência suas ferramentas e consumíveis valiosos. Os principais recursos incluem:',
      linkvideo: 'https://youtu.be/nVD7h76RWfs?si=XqetRgMjYUzoGpKY'
    },
    {
      nome: 'Express ToolBox',
      imagem: '/assets/expresstoolbox.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/express-toolbox---coilsystems-express-toolbox--cp-l3-2711/p',
      categoria: ['hardware', 'security', 'express', 'express-toolbox'],
      descricao: 'Dispensa Segura de Ponto de Uso. Este dispositivo de alta segurança gerencia e controla consumíveis, ao mesmo tempo em que reduz custos, aumenta a produtividade e reduz o desperdício.',
      linkvideo: 'https://youtu.be/Ab-A8MAjo1Q?si=XTB6NoueiEcO4bT7'
    },
    {
      nome: 'ToolBox',
      imagem: '/assets/toolbox.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/toolbox---coilsystems-toolbox--cp-l3-2738/p',
      categoria: ['hardware', 'security', 'toolbox'],
      descricao: 'O ToolBox é sua solução para dispensação segura no ponto de uso de ferramentas de corte, MRO, EPI e consumíveis. Com recursos de alta segurança, visibilidade aprimorada do produto e opções flexíveis de dispensação para itens individuais ou em kit, o ToolBox simplifica suas operações.',
      linkvideo: 'https://youtu.be/Ab-A8MAjo1Q?si=XTB6NoueiEcO4bT7'
    },
    {
      nome: 'POU',
      imagem: '/assets/pou.png',
      vejamais: 'https://storage.stanleyblackanddecker.com/pou---kiosksystems-pou--cp-l3-2735/p',
      categoria: ['hardware', 'pou'],
      descricao: 'O computador de mesa portátil e o scanner transformam qualquer espaço em uma estação de trabalho, permitindo que você gerencie seu inventário mais perto do depósito de ferramentas.',
      linkvideo: 'https://youtu.be/E4KV5tbpK1w?si=9MW_ySQttzvp6wkm'
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

  produtoSelecionado: Produto | null = null;

  abrirModal(produto: Produto): void {
    this.produtoSelecionado = produto;
  }

  fecharModal(): void {
    this.produtoSelecionado = null;
  }
}

