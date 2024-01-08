import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';



@NgModule({
  declarations: [
    PageHeaderComponent
  ],
  imports: [ CommonModule , MaterialModule ],
  exports: [MaterialModule,PageHeaderComponent]
})
export class SharedModule { }
