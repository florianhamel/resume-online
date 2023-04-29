import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ResumeComponent} from "./components/resume/resume.component";
import {TerminalComponent} from "./components/terminal/terminal.component";

const routes: Routes = [
  {path: '', component: TerminalComponent},
  {path: 'resume', component: ResumeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
