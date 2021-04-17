import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/core/usuarios.service';
import { Usuario } from 'src/app/models/usuario';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { CadastrarUsuarioComponent } from '../cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { ActivatedRoute, Router } from '@angular/router';





@Component({
  selector: 'cad-listagem-usuarios',
  templateUrl: './listagem-usuarios.component.html',
  styleUrls: ['./listagem-usuarios.component.css']
})
export class ListagemUsuariosComponent implements OnInit {

  usuarios : Usuario[] = [];
  usuario : Usuario
  id: number
  constructor(public dialog : MatDialog,
              private usuarioService : UsuariosService,
              private router : Router,
              private activatedRoute: ActivatedRoute
              ){}

  ngOnInit(): void {


    this.id = this.activatedRoute.snapshot.params['id'];
    
      if (this.id) {
        const dialogConfig = new MatDialogConfig ();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = "40%";
        
        this.dialog.open(EditarUsuarioComponent, dialogConfig);

        this.usuarioService.refreshUsuario$.subscribe(() => {
          this.listarUsuarios();
    
        });
    
        this.listarUsuarios();
 
      } else {

        this.usuarioService.refreshUsuario$.subscribe(() => {

          this.listarUsuarios(); 
        });

        this.listarUsuarios();   
      }
  }

 private listarUsuarios () : void {
   this.usuarios = [];
   this.usuarioService.listar().subscribe((usuarios : Usuario[]) => this.usuarios.push(...usuarios));
 }
 
 openDialog() {

  const dialogConfig = new MatDialogConfig ();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.width = "40%";
  
  
  this.dialog.open(CadastrarUsuarioComponent, dialogConfig);
 }

 remover(id: number) : void {
  this.usuarioService.excluir(id).subscribe({
    next: () => {
      console.log('Deleted with sucess')
      this.listarUsuarios();
    }, error: err => console.log('Error', err)
  })
}

abrir (id: number): void {
  
  this.router.navigateByUrl('/usuarios/' + id);
}


} 
 

  






