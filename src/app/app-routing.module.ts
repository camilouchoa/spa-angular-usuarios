
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './usuarios/cadastrar-usuario/cadastrar-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { ListagemUsuariosComponent } from './usuarios/listagem-usuarios/listagem-usuarios.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full'
  },
  {
    path: 'usuarios',
    children: [
    {
        path: '',
        component: ListagemUsuariosComponent
    },

    {
      path: 'cadastro',
      children: [
       { 
         path: '',
         component: CadastrarUsuarioComponent
       },

       {
         path: ':id',
         component: ListagemUsuariosComponent
         
       }
      ]
    },

    {
      path: ':id',
      component: CadastrarUsuarioComponent,
      pathMatch: 'full'
    },
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
