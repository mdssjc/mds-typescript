import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CipherComponent } from "./cipher/cipher";
import { SecretMessageComponent } from "./secret-message/secret-message";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CipherComponent,
    SecretMessageComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
