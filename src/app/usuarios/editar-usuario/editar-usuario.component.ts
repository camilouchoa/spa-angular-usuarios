import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/models/usuario';

import { ListagemUsuariosComponent } from '../listagem-usuarios/listagem-usuarios.component';

@Component({
  selector: 'cad-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css'],
  template: 'passed in {{ data.id }}',

})
export class EditarUsuarioComponent implements OnInit {

  id: number;
  cadastro: FormGroup;
  
    constructor(private usuarioService: UsuariosService,
                private formBuilder: FormBuilder,
                private fb: FormBuilder,
                private router: Router,
                private activatedRoute: ActivatedRoute,
                @Inject(MAT_DIALOG_DATA) public data:ListagemUsuariosComponent){
                  this.id = data.id;
                } 
                
  
  
  
    ngOnInit(): void {
     
      this.usuarioService.visualizar(this.id).subscribe((usuario: Usuario) => this.criarUsuario(usuario))
     
    }
  
    submit (): void {
  
      const usuario = this.cadastro.getRawValue() as Usuario;
      if (this.id){
       usuario.id= this.id;
       this.editar(usuario)
      } 
      
    } 
  
  
    private criarUsuario(usuario : Usuario) {
      
       this.cadastro = this.formBuilder.group ({
       nome: [usuario.nome, [Validators.required]],
       email: [usuario.email, [Validators.required]],
       site: [usuario.site]
      })
    }
  
    private editar(usuario: Usuario) : void {
      this.usuarioService.editar(usuario).subscribe(() => {
        alert ('Cadastro atualizado com sucesso');
        
      },
      () =>  {
        alert('Erro ao salvar');
      }
      )
    }
         
    
  
  }