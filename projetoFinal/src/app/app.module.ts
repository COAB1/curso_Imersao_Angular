import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursoComponent } from './curso/curso.component';
import { LayoutComponent } from './layout/layout.component';
import { CursoService } from './curso/servico/curso.service';
import { CursomanterComponent } from './curso/cursomanter/cursomanter.component';
import { AlunoComponent } from './aluno/aluno.component';
import { AlunoService } from './aluno/servico/aluno.service';
import { AlunomanterComponent } from './aluno/alunomanter/alunomanter.component';
import { MatriculaComponent } from './matricula/matricula.component';
import { MatriculamanterComponent } from './matricula/matriculamanter/matriculamanter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CursoComponent,
    LayoutComponent,
    CursomanterComponent,
    AlunoComponent,
    AlunomanterComponent,
    MatriculaComponent,
    MatriculamanterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    CursoService,
    AlunoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
