import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import { FormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MojServiceService } from './moj-service.service';
import { MojaLepaKomponentaComponent } from './moja-lepa-komponenta/moja-lepa-komponenta.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

import { SortPipe } from './app.sort';

@NgModule({ // tukaj so samo pipe in component! (servisi ne)
  declarations: [
    SortPipe,
    AppComponent,
    MojaLepaKomponentaComponent,
    ProductComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'member',
        component: MembersComponent
      },
      {
        path: 'product',
        component: ProductComponent
      }
      
    ])
  ],
  providers: [MojaLepaKomponentaComponent, MojServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
