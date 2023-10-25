import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  divOculto = false;
  primaryColor: string;

  constructor() {
    this.primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    console.log(this.primaryColor);
  }

  toggleDiv() {
    this.divOculto = !this.divOculto;
  }

  ngAfterViewInit() {
    let color = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();
    $(window).scroll(function () {
      const scrollPoint = 300;
      if ($(window).scrollTop() >= scrollPoint) {
        $('.contentNav').css('background-color', color);
      } else {
        $('.contentNav').css('background-color', 'transparent');
      }
    })
  };
}
