import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/add/operator/map"; // da dela .map

@Injectable()
export class MojServiceService {

  constructor(private klicApija: Http) { }

  objekt = {
    id: "1",
    name: "david",
    rollno: "2342"
  };

  vrnilPodatke() {
    this.klicApija.get("./assets/data/fake-data.json").map(
      (x) => x.json() // potrebno da so podatki v formatu json!
    ).subscribe(
      function(x) {
        console.log(x);
      }
    );
  }

  variabla = "hahaha";

  uspeh() {
    return "Uspesno!"
  }

}