import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ConversorComponent } from './components';
import { MoedaService, ConversorService } from './services';
import { NumeroDirective } from './directives';
import { ModalCotacaoComponent } from './utils';
import { DataBrPipe } from './pipes';



@NgModule({
	declarations: [ConversorComponent, NumeroDirective, ModalCotacaoComponent, DataBrPipe],
	imports: [
		CommonModule,
		FormsModule,
		HttpClientModule
	],
	exports: [
		ConversorComponent
	],
	providers: [
		MoedaService,
		ConversorService
	]
})
export class ConversorModule { }
