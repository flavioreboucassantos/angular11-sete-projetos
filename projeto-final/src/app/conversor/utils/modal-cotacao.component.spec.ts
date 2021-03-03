import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DataBrPipe } from '../pipes';
import { ModalCotacaoComponent } from './modal-cotacao.component';

describe('ModalCotacaoComponent', () => {
	let component: ModalCotacaoComponent;
	let fixture: ComponentFixture<ModalCotacaoComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [
				ModalCotacaoComponent,
				DataBrPipe
			],
			imports: [
				HttpClientModule
			]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ModalCotacaoComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
