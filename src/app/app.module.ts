import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TerminalComponent} from './components/terminal/terminal.component';
import {TerminalPromptComponent} from "./components/terminal/terminal-prompt/terminal-prompt.component";
import {TerminalMenuComponent} from './components/terminal/terminal-menu/terminal-menu.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ResumeButtonsComponent} from './components/resume/resume-buttons/resume-buttons.component';
import {ResumeComponent} from './components/resume/resume.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {AboutTopicComponent} from './components/about/about-topic/about-topic.component';
import { TerminalMediaComponent } from './components/terminal/terminal-media/terminal-media.component';

@NgModule({
  declarations: [
    AppComponent,
    TerminalComponent,
    TerminalPromptComponent,
    ResumeComponent,
    TerminalMenuComponent,
    ResumeButtonsComponent,
    ResumeComponent,
    HomeComponent,
    AboutComponent,
    AboutTopicComponent,
    TerminalMediaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
