import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TerminalComponent} from './components/terminal/terminal.component';
import {ResumeComponent} from './components/resume/resume.component';
import {TerminalPromptComponent} from "./components/terminal/prompt/terminal-prompt/terminal-prompt.component";

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalPromptComponent,
    ResumeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
