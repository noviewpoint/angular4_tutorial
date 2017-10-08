import { Component } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddajObrazec = function(x) {
    console.log("Oddal obrazec!", x);
  };

  isNumeric = function(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

  obrazec;
  ngOnInit() {
    this.obrazec = new FormGroup({
      decimalno: new FormControl(null),
      binarno: new FormControl(null),
      osmisko: new FormControl(null),
      sestnajstisko: new FormControl(null)
    });
  };

  bin = 0;
  octa = 0;
  hexa = 0;

  vpisanaDecimalna = function(oldVal, newVal) {
    console.log("vpisanaDecimalna", oldVal, newVal);
    if (newVal !== "") {
      newVal = parseInt(newVal, 10);
      this.obrazec.patchValue({binarno: newVal.toString(2)});
      this.obrazec.patchValue({osmisko: newVal.toString(8)});
      this.obrazec.patchValue({sestnajstisko: newVal.toString(16)});
    } else {
      this.obrazec.patchValue({binarno: ""});
      this.obrazec.patchValue({osmisko: ""});
      this.obrazec.patchValue({sestnajstisko: ""});
    }
  };
  vpisanaBinarna = function(oldVal, newVal) {
    console.log("vpisanaBinarna", oldVal, newVal, this.bin);
    this.bin = this.bin + 1;
    if (this.bin === 1) {
      if (newVal !== "") {
        this.obrazec.patchValue({decimalno: parseInt(newVal, 2).toString(10)});
      } else {
        this.obrazec.patchValue({decimalno: ""});
      }
      this.bin = 0;
    }
  };
  vpisanaOsmiska = function(oldVal, newVal) {
    console.log("vpisanaOsmiska", oldVal, newVal, this.octa);
    this.octa = this.octa + 1;
    if (this.octa === 1) {
      if (newVal !== "") {
        this.obrazec.patchValue({decimalno: parseInt(newVal, 8).toString(10)});
      } else {
        this.obrazec.patchValue({decimalno: ""});
      }
      this.octa = 0;
    }
  };
  vpisanaSestnajstiska = function(oldVal, newVal) {
    console.log("vpisanaSestnajstiska", oldVal, newVal, this.hexa);
    this.hexa = this.hexa + 1;
    if (this.hexa === 1) {
      if (newVal !== "") {
        this.obrazec.patchValue({decimalno: parseInt(newVal, 16).toString(10)});
      } else {
        this.obrazec.patchValue({decimalno: ""});
      }
      this.hexa = 0;
    }
  };
}
