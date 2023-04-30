import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./components/resume/resume.component";
import {TerminalComponent} from "./components/terminal/terminal.component";
import {AboutComponent} from "./components/about/about.component";

const routes: Routes = [
  {path: '', component: TerminalComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
