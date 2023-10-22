import { Component, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  divOculto = false;

  toggleDiv() {
    this.divOculto = !this.divOculto;
  }

  ngAfterViewInit() {
    $(window).scroll(function () {
      const scrollPoint = 300;
      if ($(window).scrollTop() >= scrollPoint) {
        $('.contentNav').css('background-color', '#e14eca');
      } else {
        $('.contentNav').css('background-color', 'transparent');
      }
    })
  };
}
