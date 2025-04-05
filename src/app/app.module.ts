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
import { PipelinesComponent } from './pipelines/pipelines.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { TempRefAgeComponent } from './temp-ref-age/temp-ref-age.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { SetBackgroundDirective } from './customDirective/set-background.directive';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { MomentPipe, FilterPipe } from './custom-pipe/custom.pipe';
import { ReactiveFormTaskComponent } from './reactive-form-task/reactive-form-task.component';
import { Select2 } from 'ng-select2-component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ParentEncapsulationComponent } from './parent-encapsulation/parent-encapsulation.component';
import { ChildEncapsulationComponent } from './child-encapsulation/child-encapsulation.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommunicateParentComponent } from './communicate-parent/communicate-parent.component';
import { CommunicateChildComponent } from './communicate-parent/communicate-child/communicate-child.component';
import { CommunicateChild2Component } from './communicate-parent/communicate-child2/communicate-child2.component';
import { HoverDirective } from './hover.directive';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { SampleComponent } from './sample/sample.component';
import { CgsComponent } from './cgs/cgs.component';
import { FormComponent } from './cgs/form/form.component';
import { MapComponent } from './rxjs/map.component';
import { BasicComponent } from './rxjs/basic.component';
import { ComplexComponent } from './rxjs/complex.component';
import { TrainTktComponent } from './train-tkt/train-tkt.component';
import { TypesComponent } from './rxjs/types/types.component';

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
    PipelinesComponent,
    TemplateReferenceComponent,
    TempRefAgeComponent,
    CustomDirComponent,
    SetBackgroundDirective,
    ReactiveFormComponent,
    CustomPipeComponent,
    MomentPipe,
    FilterPipe,
    ReactiveFormTaskComponent,
    TemplateFormComponent,
    ParentEncapsulationComponent,
    ChildEncapsulationComponent,
    HttpApiComponent,
    RxjsComponent,
    CommunicateParentComponent,
    CommunicateChildComponent,
    CommunicateChild2Component,
    HoverDirective,
    GetterSetterComponent,
    SampleComponent,
    CgsComponent,
    FormComponent,
    MapComponent,
    BasicComponent,
    ComplexComponent,
    TrainTktComponent,
    TypesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    Select2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
