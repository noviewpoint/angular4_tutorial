import { Component, OnInit } from '@angular/core';
import { MojServiceService } from '../moj-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private new2Service: MojServiceService) { }

  izpis;
  ngOnInit() {
    console.log(this.new2Service.objekt);
    this.izpis = this.new2Service.objekt;

    console.log(this.new2Service.variabla);
  }

}
