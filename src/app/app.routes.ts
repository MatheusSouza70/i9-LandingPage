import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { TreinamentosComponent } from './components/treinamentos/treinamentos.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { SobreComponent } from './components/sobre/sobre.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'treinamentos', component: TreinamentosComponent },
  { path: 'solucoes', component: SolucoesComponent },
  { path: 'sobre', component: SobreComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];