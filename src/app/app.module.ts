import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicHighLightDirective } from './basic-highlight/basic-highlight.directive';
import { AdvancestyleDirective } from './vimal-high/advancestyle.directive';
import { UnlessDirective } from './vimal-high/unless.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicHighLightDirective,
    AdvancestyleDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
