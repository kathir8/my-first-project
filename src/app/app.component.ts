import { Component } from '@angular/core';
import { SampleComponent } from './sample/sample.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DataBindingExerciseComponent } from './data-binding-exercise/data-binding-exercise.component';
import { AttrDirComponent } from './attr-dir/attr-dir.component';
import { DivisibleTaskComponent } from './divisible-task/divisible-task.component';
import { ParentComponent } from './parent/parent.component';
import { ParentTaskComponent } from './parent-task/parent-task.component';
import { TemplateReferenceComponent } from './template-reference/template-reference.component';
import { ServiceTaskComponent } from './service-task/service-task.component';
import { ViewChildTaskComponent } from './view-child-task/view-child-task.component';
import { PipelinesComponent } from './pipelines/pipelines.component';
import { CustomDirComponent } from './custom-dir/custom-dir.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormTaskComponent } from './reactive-form-task/reactive-form-task.component';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { ParentEncapsulationComponent } from './parent-encapsulation/parent-encapsulation.component';
import { HttpApiComponent } from './http-api/http-api.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommunicateParentComponent } from './communicate-parent/communicate-parent.component';
import { GetterSetterComponent } from './getter-setter/getter-setter.component';
import { CgsComponent } from './cgs/cgs.component';
import { TrainTktComponent } from './train-tkt/train-tkt.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  show: string = 'sample'
  menuList = [
    { label: 'Sample', key: 'sample', component: SampleComponent },
    { label: 'Data Binding', key: 'data-binding', component: DataBindingComponent },
    { label: 'Data Binding Exercise', key: 'data-binding-exercise', component: DataBindingExerciseComponent },
    { label: 'Attribute Directive', key: 'attr-dir', component: AttrDirComponent },
    { label: 'Divisible Task', key: 'divisible-task', component: DivisibleTaskComponent },
    { label: 'Parent', key: 'parent', component: ParentComponent },
    { label: 'Parent Task', key: 'parent-task', component: ParentTaskComponent },
    { label: 'Template Reference', key: 'template-reference', component: TemplateReferenceComponent },
    { label: 'Service Task', key: 'service-task', component: ServiceTaskComponent },
    { label: 'ViewChild Task', key: 'view-child-task', component: ViewChildTaskComponent },
    { label: 'Pipelines', key: 'pipelines', component: PipelinesComponent },
    { label: 'Custom Directive', key: 'custom-dir', component: CustomDirComponent },
    { label: 'Template Form', key: 'template-form', component: TemplateFormComponent },
    { label: 'Reactive Form', key: 'reactive-form', component: ReactiveFormComponent },
    { label: 'Reactive Form Task', key: 'reactive-form-task', component: ReactiveFormTaskComponent },
    { label: 'Custom Pipe', key: 'custom-pipe', component: CustomPipeComponent },
    { label: 'Parent Encapsulation', key: 'parent-encapsulation', component: ParentEncapsulationComponent },
    { label: 'HTTP API', key: 'http-api', component: HttpApiComponent },
    { label: 'RxJS', key: 'rxjs', component: RxjsComponent },
    { label: 'Communicate Parent', key: 'communicate-parent', component: CommunicateParentComponent },
    { label: 'Getter Setter', key: 'getter-setter', component: GetterSetterComponent },
    { label: 'CGS', key: 'cgs', component: CgsComponent },
    { label: 'Train Ticket', key: 'train-tkt', component: TrainTktComponent },
  ];
  
}
