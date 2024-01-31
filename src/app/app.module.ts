import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CadastroSegurosComponent } from './cadastro-seguros/cadastro-seguros.component';
import { ListarSegurosComponent } from './listar-seguros/listar-seguros.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,
    CadastroSegurosComponent,
    ListarSegurosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    RouterModule,

    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
