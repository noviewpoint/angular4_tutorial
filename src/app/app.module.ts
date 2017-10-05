import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MojaLepaKomponentaComponent } from './moja-lepa-komponenta/moja-lepa-komponenta.component';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';

import { SortPipe } from './app.sort';

@NgModule({
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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
