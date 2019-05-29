import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerService } from './services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { ChangeComponent } from './components/change-component/change.component';
import { AuthorComponent } from './components/author/author.component';
import {MatInputModule} from '@angular/material';



@NgModule({
  declarations: [
    AppComponent,
    ChangeComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
