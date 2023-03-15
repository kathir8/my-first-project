import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingExerciseComponent } from './data-binding-exercise/data-binding-exercise.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { DivisibleTaskComponent } from './divisible-task/divisible-task.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { ParentTaskComponent } from './parent-task/parent-task.component';
import { ChildTaskComponent } from './child-task/child-task.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import { ViewChildTaskComponent } from './view-child-task/view-child-task.component';
import { HttpListComponent } from './http-list/http-list.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TempRefAgeComponent } from './temp-ref-age/temp-ref-age.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { SetBackgroundDirective } from './customDirective/set-background.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MomentPipe } from './custom-pipe/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    DataBindingComponent,
    DataBindingExerciseComponent,
    AttrDirComponent,
    DivisibleTaskComponent,
    ParentComponent,
    ChildComponent,
    ParentTaskComponent,
    ChildTaskComponent,
    ServiceTaskComponent,
    ViewChildTaskComponent,
    HttpListComponent,
    PipelinesComponent,
    TemplateReferenceComponent,
    TempRefAgeComponent,
    CustomDirComponent,
    SetBackgroundDirective,
    ReactiveFormComponent,
    CustomPipeComponent,
    MomentPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
