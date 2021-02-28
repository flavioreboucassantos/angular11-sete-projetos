import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TarefaService, TarefaConcluidaDirective } from './shared';
import { ListarTarefasComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

@NgModule({
	declarations: [ListarTarefasComponent, CadastrarTarefaComponent, EditarTarefaComponent, TarefaConcluidaDirective],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule
	],
	providers: [
		TarefaService
	]
})
export class TarefasModule { }
