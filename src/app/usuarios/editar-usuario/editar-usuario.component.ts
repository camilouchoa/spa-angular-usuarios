import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';

@Component({
  selector: 'cad-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario;
  id: number;

  constructor(public dialog: MatDialog,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private usuarioService : UsuariosService) { }

  ngOnInit(): void {


      this.id = this.activatedRoute.snapshot.params['id'];
      this.visualizar()

  }


  private visualizar(): void {
    this.usuarioService.visualizar(this.id).subscribe((usuario: Usuario) => this.usuario = usuario);
  }


  

}
