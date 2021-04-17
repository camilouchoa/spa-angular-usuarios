import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/models/usuario';


@Component({
  selector: 'cad-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {


id: number;
cadastro: FormGroup;

  constructor(private usuarioService: UsuariosService,
              private formBuilder: FormBuilder,
              private fb: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute
              ) { }



  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id']
    
    if (this.id) {
      this.usuarioService.visualizar(this.id).subscribe((usuario: Usuario) => this.criarUsuario(usuario))
    } else {

    this.criarUsuario(this.criarUsuarioEmBranco())
  }
  }


  submit (): void {

    const usuario = this.cadastro.getRawValue() as Usuario;
    if (this.id){
     usuario.id= this.id;
     this.editar(usuario)
    } else {
   
    this.salvar(usuario);
    this.reiniciarForm();
    }
    
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

  private editar(usuario: Usuario) : void {
    this.usuarioService.editar(usuario).subscribe(() => {
      alert ('Cadastro atualizado com sucesso');
      this.router.navigateByUrl('usuarios')
    },
    () =>  {
      alert('Erro ao salvar');
    }
    )
  }
       
  

}



