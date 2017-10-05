import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  naloge = ["AngularJS (1)", "React", "Node.js", "Express.js", "Python", "C# .NET", "vanilla JavaScript"];
  novaNaloga = "začetna vrednost";
  pushNaloga = function() {
    if (this.novaNaloga !== "") {
      this.naloge.push(this.novaNaloga);
      this.novaNaloga = "";
    }
  };
  spliceNaloga = function(index) {
    this.naloge.splice(index, 1);
  }
  dogodekDodajanja(event) {
    console.log(event);
    this.pushNaloga();
  }

  dogodekBrisanja(index) {
    this.spliceNaloga(index);
  }
  name = "shit";
  datum = Date.now();

  seznam = [3, 7, 8, 2, 1];
}
