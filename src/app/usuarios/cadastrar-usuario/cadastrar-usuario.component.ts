import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/models/usuario';



@Component({
  selector: 'cad-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css'],
  
})
export class CadastrarUsuarioComponent implements OnInit {


id: number;
cadastro: FormGroup;

  constructor(private usuarioService: UsuariosService,
              private formBuilder: FormBuilder,
              private fb: FormBuilder){}
              



  ngOnInit(): void {
   

    this.criarUsuario(this.criarUsuarioEmBranco())
  
  }


  submit (): void {

    const usuario = this.cadastro.getRawValue() as Usuario;
    
   
    this.salvar(usuario);
    this.reiniciarForm();
   
  } 

  reiniciarForm(): void {
    this.cadastro.reset();
  }

  private criarUsuario(usuario : Usuario) {
    
     this.cadastro = this.formBuilder.group ({
     nome: [usuario.nome, [Validators.required]],
     email: [usuario.email, [Validators.required]],
     site: [usuario.site]
    })
  }

  private criarUsuarioEmBranco(): Usuario {
    return {
      id: null,
      nome: null,
      email: null,
      site: null,
    }

  }

  private salvar(usuario: Usuario): void {
   
    this.usuarioService.salvar(usuario).subscribe(() => {
      alert('Cadastro realizado com sucesso');
    },
    () =>  {
       alert('Erro ao salvar');
    }
    )
  }

  
  
       
  

}



