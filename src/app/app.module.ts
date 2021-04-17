import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListagemUsuariosComponent } from './usuarios/listagem-usuarios/listagem-usuarios.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import {HttpClientModule } from '@angular/common/http';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar-usuario/cadastrar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemUsuariosComponent,
    EditarUsuarioComponent,
    CadastrarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CadastrarUsuarioComponent,
    EditarUsuarioComponent]
})
export class AppModule { }
