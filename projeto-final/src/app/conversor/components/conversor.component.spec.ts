import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MoedaService, ConversorService } from '../services';
import { NumeroDirective } from '../directives';
import { DataBrPipe } from '../pipes';
import { ModalCotacaoComponent } from '../utils';
import { ConversorComponent } from './conversor.component';

describe('ConversorComponent', () => {
	let component: ConversorComponent;
	let fixture: ComponentFixture<ConversorComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ConversorComponent,
				NumeroDirective,
				ModalCotacaoComponent,
				DataBrPipe],
			imports: [
				FormsModule,
				HttpClientModule
			],
			providers: [MoedaService, ConversorService]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ConversorComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
