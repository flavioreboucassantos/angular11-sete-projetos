import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Conversao, ConversaoResponse } from '../models'

@Injectable({
	providedIn: 'root'
})
export class ConversorService {

	private readonly BASE_URL = "http://data.fixer.io/api/latest?access_key=74841cf671b8dd2aad7c23af7cc45b4d"

	constructor(private http: HttpClient) { }

	/**
	 * Realiza a chamada para a API de conversão de moedas.
	 *
	 * @param Conversao conversao
	 * @return Observable<ConversaoResponse>
	 */
	converter(conversao: Conversao): Observable<any> {
		let params = `&base=${conversao.moedaDe}&symbols=${conversao.moedaPara}`;
		return this.http
			.get(this.BASE_URL + params);
	}

	/**
	 * Retorna a cotação para dado uma response.
	 *
	 * @param ConversaoResponse conversaoResponse
	 * @param Conversao conversao
	 * @return number
	 */
	cotacaoPara(conversaoResponse: ConversaoResponse,
		conversao: Conversao): number {
		if (conversaoResponse === undefined) {
			return 0;
		}

		return conversaoResponse.rates[conversao.moedaPara];
	}

	/**
	 * Retorna a cotação de dado uma response.
	 *
	 * @param ConversaoResponse conversaoResponse
	 * @param Conversao conversao
	 * @return string
	 */
	cotacaoDe(conversaoResponse: ConversaoResponse,
		conversao: Conversao): string {
		if (conversaoResponse === undefined) {
			return '0';
		}

		return (1 / conversaoResponse.rates[conversao.moedaPara])
			.toFixed(4);
	}

	/**
	 * Retorna a data da cotação dado uma response.
	 *
	 * @param ConversaoResponse conversaoResponse
	 * @return string
	 */
	dataCotacao(conversaoResponse: ConversaoResponse): string {
		if (conversaoResponse === undefined) {
			return '';
		}

		return conversaoResponse.date;
	}
}
