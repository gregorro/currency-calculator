import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ServerService {
  constructor(private http: HttpClient) {
  }

  private key: string = 'c6a1f660e78d87bfad5a0b6d580508b6';

  getValue(currency: string[]) {
    return this.http.get(`http://data.fixer.io/api/latest`, {
      params: {
        access_key: this.key,
        symbols: `${currency[0]},${currency[1]}`
      }
     });
  }
}
