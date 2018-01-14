import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { Code404Component } from './code404/code404.component';
import { SalerInfoComponent } from './saler-info/saler-info.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ChatComponent } from './chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    Code404Component,
    SalerInfoComponent,
    ProductDescComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
