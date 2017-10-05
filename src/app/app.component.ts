import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mojObjekt = {
    "lastnost1": 123,
    "lastnost2": "beseda"
  };

  matrika = [1, 2, 3, 4, 5, 6, 7];

  zastavica = false;
  mojeIme = "David";


}
