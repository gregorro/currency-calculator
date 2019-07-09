import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements AfterViewInit {
  constructor() {
  }

  @ViewChild('thirdDigit', {read: ElementRef}) selector3: ElementRef;
  @ViewChild('secondDigit', {read: ElementRef}) selector2: ElementRef;
  @ViewChild('firstDigit', {read: ElementRef}) selector1: ElementRef;

  ngAfterViewInit(){
    this.generate404();
  }

  generate404() {

    let loop1: any;
    let loop2: any;
    let loop3: any;
    let time: number = 30;
    let i: number = 0;


    const that = this;

    loop3 = setInterval(() => {
      if (i > 40) {
        clearInterval(loop3);
        that.selector3.nativeElement.textContent = '4';
      } else {
        that.selector3.nativeElement.textContent = (Math.floor(Math.random() * 9) + 1).toString();
        i++;
      }
    }, time);

    loop2 = setInterval(() => {
      if (i > 80) {
        clearInterval(loop2);
        that.selector2.nativeElement.textContent = '0';
      } else {

        that.selector2.nativeElement.textContent = (Math.floor(Math.random() * 9) + 1).toString();
        i++;
      }
    }, time);

    loop1 = setInterval(() => {
      if (i > 100) {
        clearInterval(loop1);
        that.selector1.nativeElement.textContent = '4';
      } else {
        that.selector1.nativeElement.textContent = (Math.floor(Math.random() * 9) + 1).toString();
        i++;
      }
    }, time);
  }
}
