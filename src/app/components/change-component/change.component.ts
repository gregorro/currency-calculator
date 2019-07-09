import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ServerService } from 'src/app/services/server.service';
import * as $ from 'jquery';

export interface ICurrency {
  value: string;
  src: string;
}

export interface IServerResponse {
  base: string;
  date: string;
  rates: IRates;
  success: boolean;
  timestamp: number;
}

export interface IRates {
  pln?: number;
  eur?: number;
  usd?: number;
  gbp?: number;
}

@Component({
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements AfterViewInit {
  constructor(private server: ServerService) {
    this.entryCurrency = new FormControl('', [Validators.required]);
    this.departureCurrency = new FormControl('', Validators.required);
    this.entryAmount = new FormControl('', [
      Validators.required,
      Validators.pattern('([0-9]*[.,]?)?[0-9]{1,2}'),
      Validators.min(0)
    ]);
  }

  @ViewChild('content', { read: ElementRef }) content: ElementRef;

  response: string = null;
  entryCurrency: FormControl;
  departureCurrency: FormControl;
  entryAmount: FormControl;

  allCurrency: ICurrency[] = [
    { value: 'PLN', src: './../../../assets/pl.png' },
    { value: 'EUR', src: './../../../assets/euro.png' },
    { value: 'USD', src: './../../../assets/us.png' },
    { value: 'GBP', src: './../../../assets/gb.png' },
    { value: 'JPY', src: './../../../assets/jp.png' },
    { value: 'BGN', src: './../../../assets/bg.png' },
    { value: 'CZK', src: './../../../assets/cz.png' },
    { value: 'DKK', src: './../../../assets/dk.png' },
    { value: 'HUF', src: './../../../assets/hu.png' },
    { value: 'RON', src: './../../../assets/ro.png' },
    { value: 'SEK', src: './../../../assets/se.png' },
    { value: 'CHF', src: './../../../assets/ch.png' },
    { value: 'ISK', src: './../../../assets/is.png' },
    { value: 'NOK', src: './../../../assets/no.png' },
    { value: 'HRK', src: './../../../assets/hr.png' },
    { value: 'RUB', src: './../../../assets/ru.png' },
    { value: 'TRY', src: './../../../assets/tr.png' },
    { value: 'AUD', src: './../../../assets/au.png' },
    { value: 'BRL', src: './../../../assets/br.png' },
    { value: 'CAD', src: './../../../assets/ca.png' },
    { value: 'CNY', src: './../../../assets/cn.png' },
    { value: 'HKD', src: './../../../assets/hk.png' },
    { value: 'IDR', src: './../../../assets/id.png' },
    { value: 'ILS', src: './../../../assets/il.png' },
    { value: 'INR', src: './../../../assets/in.png' },
    { value: 'KRW', src: './../../../assets/KRW.png' },
    { value: 'MXN', src: './../../../assets/mx.png' },
    { value: 'MYR', src: './../../../assets/mal.png' },
    { value: 'NZD', src: './../../../assets/nz.png' },
    { value: 'PHP', src: './../../../assets/ph.png' },
    { value: 'SGD', src: './../../../assets/sg.png' },
    { value: 'THB', src: './../../../assets/th.png' },
    { value: 'ZAR', src: './../../../assets/za.png' },
  ];

  ngAfterViewInit() {
    $(this.content.nativeElement).animate({opacity: 1 }, 1000);
  }

  isValid() {
    if (
      this.entryCurrency.valid &&
      this.departureCurrency.valid &&
      this.entryAmount.valid
    ) {
      return true;
    } else {
      return false;
    }
  }

  convert() {
    if (this.isValid()){
      this.server
      .getValue([this.entryCurrency.value, this.departureCurrency.value])
      .toPromise()
      .then(data => {
        const answer: IServerResponse = <IServerResponse>data;
        if (answer.success){
          const value: string = (this.entryAmount.value.replace(',', '.') * answer.rates[this.departureCurrency.value] /
          answer.rates[this.entryCurrency.value]
        ).toFixed(2);

        this.response = `Wartość ${parseFloat(this.entryAmount.value.replace(',', '.'))} ${
          this.entryCurrency.value
        } odpowiada ${value} ${this.departureCurrency.value}.`;
        } else {
          this.response = `Serwer nie zwrócił szukonego zasobu, sprawdź klucz dostępu.`;
        }
      }).catch(err => {
        this.response = `Błąd połączenia z serwerem, spróbuj później.`;
      });
    }
  }
}
