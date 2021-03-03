import {
	Directive,
	HostListener,
	ElementRef
} from '@angular/core';
import {
	NG_VALUE_ACCESSOR,
	ControlValueAccessor
} from '@angular/forms';

@Directive({
	selector: '[numero]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: NumeroDirective,
		multi: true
	}]
})
export class NumeroDirective implements ControlValueAccessor {

	onTouched: any;
	onChange: any;

	constructor(private el: ElementRef) { }

	/**
	 * Implementa evento de keyup para o elemento da diretiva.
	 * 
	 * @param any $event
	 */
	@HostListener('keydown', ['$event'])
	onKeyDown($event: any) {
		let valor = $event.target.value;
		if ($event.key != 'Backspace' && $event.key != 'Delete'
			&& $event.key != 'ArrowLeft' && $event.key != 'ArrowRight'
			&& $event.key != 'Home' && $event.key != 'End') {
			$event.preventDefault();

			let entrada = $event.key;
			let pos = this.el.nativeElement.selectionStart;
			if (entrada === '.') {
				if ($event.target.value.indexOf('.') < 0) {
					valor = valor.substr(0, pos) + '.' + valor.substr(pos);
				}
			} else {
				valor = valor.substr(0, pos) + entrada.replace(/[\D]/g, '') + valor.substr(pos);
			}
			$event.target.value = valor;
			this.el.nativeElement.selectionStart = pos + 1;
			this.el.nativeElement.selectionEnd = pos + 1;
		}
		this.onChange($event.target.value);

		/*let valor = $event.target.value;
		let posDecimais = valor.indexOf('.');

		valor = valor.replace(/[\D]/g, '');

		if (posDecimais > 0) {
			valor = valor.substr(0, posDecimais) + '.' +
				valor.substr(posDecimais);
		}

	
		$event.target.value = valor;
		this.onChange(valor);*/
	}
	@HostListener('keyup', ['$event'])
	onKeyUp($event: any) {
		this.onChange($event.target.value);
	}

	/**
	 * Registra função a ser chamada para atualizar 
	 * valor na model.
	 * 
	 * @param any fn
	 */
	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	/**
	 * Registra função a ser chamada para atualizar 
	 * valor na model para evento touched.
	 * 
	 * @param any fn
	 */
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	/**
	 * Obtém o valor contido na model.
	 * 
	 * @param any value
	 */
	writeValue(value: any): void {
		this.el.nativeElement.value = value;
	}

}
