import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';


export interface ICurrency {
  value: string;
}

@Component({
  templateUrl: './change.component.html',
  styleUrls: ['./change.component.scss']
})
export class ChangeComponent implements OnInit {

  constructor(private server: ServerService){
    this.server.getValue().subscribe( (data)=> {
     console.log(data);
    });
  }

  ngOnInit() {
  }


  value: number = null;

  allCurrency: ICurrency[] = [
    {value: 'PLN'},
    {value: 'EUR'},
    {value: 'USD'},
    {value: 'GBP'}
  ];

}
