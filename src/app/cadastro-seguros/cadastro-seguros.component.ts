import { Component, OnInit } from '@angular/core';
import { Seguro } from '../models/Seguro';
import { Observable } from 'rxjs';
import { MarcaCarro } from '../models/MarcaCarro';
import { MarcaCarroService } from '../services/marca-carro.service';

@Component({
  selector: 'app-cadastro-seguros',
  templateUrl: './cadastro-seguros.component.html',
  styleUrls: ['./cadastro-seguros.component.css']
})
export class CadastroSegurosComponent implements OnInit {

  public seguro = new Seguro();
  public marcasCarro$: Observable<MarcaCarro[]> | undefined;

  constructor(private marcaCarroService: MarcaCarroService) { }

  ngOnInit() {
    this.marcasCarro$ = this.marcaCarroService.getMarcas();
  }

  adicionar() {

  }

  enviarNotificacao() {

  }

}
