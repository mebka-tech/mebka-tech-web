import { Component } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  divOculto = false;

  toggleDiv() {
    this.divOculto = !this.divOculto;
  }

}
