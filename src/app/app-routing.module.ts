import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastroSegurosComponent } from './cadastro-seguros/cadastro-seguros.component';
import { ListarSegurosComponent } from './listar-seguros/listar-seguros.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'cadastro'
  },
  {
    path: 'cadastro', component: CadastroSegurosComponent,
  },
  {
    path: 'list', component: ListarSegurosComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
