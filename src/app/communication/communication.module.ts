import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ]
})
export class CommunicationModule { }
