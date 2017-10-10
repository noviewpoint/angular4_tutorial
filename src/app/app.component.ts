import { Component } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MojServiceService } from './moj-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (private new2Service: MojServiceService) {

  }

  oddajObrazec = function(x) {
    console.log("Oddal obrazec!", x);
  };

  obrazec;
  ngOnInit() {
    console.log(this.new2Service.uspeh()); //preveris ce je bila service uporabljena v tej komponenti
    console.log(this.new2Service.objekt);

    this.new2Service.objekt.name = "JOHN";
    this.new2Service.variabla = "test";

    this.obrazec = new FormGroup({
      prvoime: new FormControl("david", Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern("[\\w\\-\\s\\/]+")
      ])),
      zadnjeime: new FormControl("", Validators.compose([
        Validators.required,
      ])),
      jeziki: new FormControl("", Validators.required)
    });
  };

  mojValidator(control) { //input je html input element
    if(control.value.length < 3) {
      return {"zadnjeIme": true};
    }
  }
}