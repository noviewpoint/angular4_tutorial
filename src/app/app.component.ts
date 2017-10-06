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

  obrazec;
  ngOnInit() {
    this.obrazec = new FormGroup({
      prvoime: new FormControl("david"),
      zadnjeime: new FormControl(""),
      jeziki: new FormControl("")
    });
  };
}
