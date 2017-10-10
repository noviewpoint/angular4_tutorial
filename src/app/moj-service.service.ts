import { Injectable } from '@angular/core';

@Injectable()
export class MojServiceService {

  constructor() { }

  objekt = {
    id: "1",
    name: "david",
    rollno: "2342"
  };

  variabla = "hahaha";

  uspeh() {
    return "Uspesno!"
  }

}